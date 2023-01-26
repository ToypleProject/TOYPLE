package com.project.toyple.user;

import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.net.URLEncoder;

@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService, UserDetailsService {
    UserDao userDao;
    BCryptPasswordEncoder passwordEncoder;

    public boolean isIdDuplicated(UserDto userDto) {
        return userDao.existsByUserId(userDto.getUserId());
    }

    public boolean isEmailDuplicated(UserDto userDto) {
        return userDao.existsByEmail(userDto.getEmail());
    }

    public String join(UserDto userDto) {  // TODO: 중복 체크하고 오류메세지 프론트로 전달
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
        UserDto findUser = userDao.findByUserId(userId)
                .orElseThrow(() -> new UsernameNotFoundException("could not find user " + userId));

        return User.builder()
                .username(findUser.getUserId())
                .password(findUser.getPassword())
                .roles()
                .build();
    }
}
