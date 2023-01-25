package com.project.toyple.user;

import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class UserServiceImpl implements UserService, UserDetailsService {
    UserDao userDao;
    BCryptPasswordEncoder passwordEncoder;  // 안되면 Autowired로 주입해보기

    public void login(UserDto userDto) {
//        int result = validateUser(userDto);
//        System.out.println("validateUser() 결과: " + result);
//        if (result == 0) {
//            // 세션 발급
//            System.out.println("세션 발급");
//        } else {
//            // 에러
//            System.out.println("에러발생");
//        }
    }

    // 여기서 인증 실패 시 Exception 발생시킬 건지, return 1; 할건지 정해야 함(결국 view에 에러를 전달하는것이 목표)
//    public int validateUser(UserDto userDto) {
//        Optional<UserDto> findUser = userDao.findByUserId(userDto.getUserId());
//        if (findUser == null || !userDto.getPassword().equals(findUser.getPassword())) {
//            return 1;
//        } else {
//            return 0;
//        }
//    }

    public void join(UserDto userDto) {
        String rawPassword = userDto.getPassword();
        String encPassword = passwordEncoder.encode(rawPassword);
        userDto.setPassword(encPassword);
        userDao.save(userDto);
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
