package com.project.toyple.user;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;

@SpringBootTest
@Transactional
public class UserServiceTests {
    @Autowired
    UserService userService;

//    @Test
//    public void loginTest() {
//        UserDto userDto = new UserDto();
//        userDto.setUserId("daypark");
//        userDto.setPassword("1234");
//        userService.login(userDto);
//
//        userDto.setUserId("hong");
//        userDto.setPassword("wrong");
//        userService.login(userDto);
//    }

    @Test
    public void sendAuthEmailTest() {
        UserDto userDto = new UserDto();
        userDto.setUserId("daypark");
        userDto.setUserName("박다연");
        userDto.setEmail("ddggs@naver.com");
        userService.sendAuthEmail(userDto);
    }

    @Test
    public void makeRandomKeyTest() {
//        System.out.println((char)(0 + '0'));  // 0
//        System.out.println((char)(9 + '0'));  // 9
//        System.out.println((char)(10 - 10 + 'A'));  // A
//        System.out.println((char)(35 - 10 + 'A'));  // Z
//        System.out.println((char)(36 - 36 + 'a'));  // a
//        System.out.println((char)(61 - 36 + 'a'));  // z
        for (int i = 0; i < 200; i++) {
            userService.makeRandomKey();
        }
    }
}
