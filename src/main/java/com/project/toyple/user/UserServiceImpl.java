package com.project.toyple.user;

import lombok.AllArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;
import java.net.URLEncoder;
import java.util.Optional;
import java.util.Random;

@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService, UserDetailsService {
    private UserDao userDao;
    private BCryptPasswordEncoder passwordEncoder;
    private JavaMailSender javaMailSender;


    public boolean isIdDuplicated(UserDto userDto) {
        return userDao.existsByUserId(userDto.getUserId());
    }

    public boolean isEmailDuplicated(UserDto userDto) {
        return userDao.existsByEmail(userDto.getEmail());
    }

    // 아이디, 이메일 중복 체크하고 중복되지 않는다면 DB에 저장함
    public String join(UserDto userDto) {  // TODO: url 값 정하는건 controller에서 해야할 것 같음.
        String url = "";

        try {
            if (isIdDuplicated(userDto)) {  // ID가 중복이라면
                url = "redirect:/user/join?error=true&exception=";
                url += URLEncoder.encode("이미 가입된 아이디 입니다.", "UTF-8");
            } else if (isEmailDuplicated(userDto)) {  // Email이 중복이라면
                url = "redirect:/user/join?error=true&exception=";
                url += URLEncoder.encode("이미 가입된 이메일 입니다.", "UTF-8");
            } else {  // DB에 새 유저 정보 저장
                String rawPassword = userDto.getPassword();
                String encPassword = passwordEncoder.encode(rawPassword);
                userDto.setPassword(encPassword);
                userDao.save(userDto);
                url = "redirect:/user/join?error=false";
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return url;
    }

    @Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
        UserDto findUser = userDao.findByUserId(userId);
                //.orElseThrow(() -> new UsernameNotFoundException("could not find user " + userId));

        return User.builder()
                .username(findUser.getUserId())
                .password(findUser.getPassword())
                .roles()
                .build();
    }

    // 입력한 정보와 일치하는 회원이 있는지 판별
    public boolean checkUserInfo(UserDto userDto) throws UsernameNotFoundException {
        String userId = userDto.getUserId();
        UserDto findUser = userDao.findByUserId(userId);
                //.orElseThrow(() -> new UsernameNotFoundException("could not find user " + userId));
        if (userDto.getUserName().equals(findUser.getUserName()) &&
            userDto.getEmail().equals(findUser.getEmail())) {
            return true;
        }
        return false;
    }

    // 영어 대문자, 영어 소문자, 숫자로 이루어진 8자리 랜덤 키 생성
    public String makeRandomKey() {
        Random random = new Random();
        String key = "";

        for (int i = 0; i < 8; i++) {
            int randomNum = random.nextInt(62);
            if (randomNum < 10) {
                key += (char)(randomNum + '0');
            } else if (randomNum < 36) {
                key += (char)(randomNum - 10 + 'A');
            } else {
                key += (char)(randomNum - 36 + 'a');
            }
        }
//        System.out.println(key);
        return key;
    }

    // 인증 이메일 전송
    public String sendAuthEmail(UserDto userDto) {
        MimeMessage message = javaMailSender.createMimeMessage();
        String content = "";
        String randomKey = makeRandomKey();

        content += "<h1>TOYPLE</h1>";
        content += "안녕하세요 " + userDto.getUserName() + "님, 사이드 프로젝트 팀원 모집 사이트 TOYPLE 입니다.<br />";
        content += "아래 인증 코드를 홈페이지에 입력해 주세요.<br />";
        content += "<h3>인증 코드: <mark>" + randomKey + "</mark></h3>";

        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            helper.setSubject("[TOYPLE] 인증 메일");
            helper.setFrom("TOYPLE");  // 설정 안되는듯??
            helper.setTo(userDto.getEmail());
            helper.setText(content, true);
            javaMailSender.send(message);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        return passwordEncoder.encode(randomKey);
    }

    /*
    TODO: user 테이블의 값 변경 시 다른 테이블의 데이터도 변경되는지 확인하기(userId를 외래키로 가지고 있는 테이블의 userId값)
    아니근데 ON UPDATE CASCADE; 이런거 설정 안했는데 어떻게 자동으로 바뀌게 하지?
     */
    public void changePassword(String userId, String password) {
        UserDto user = userDao.findByUserId(userId);
        UserDto newUser = new UserDto(user);
        newUser.setPassword(passwordEncoder.encode(password));
        userDao.save(newUser);
    }
}
