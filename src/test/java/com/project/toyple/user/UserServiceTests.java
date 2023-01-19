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

    @Test
    public void loginTest() {
        UserDto userDto = new UserDto();
        userDto.setUserId("daypark");
        userDto.setPassword("1234");
        userService.login(userDto);

        userDto.setUserId("hong");
        userDto.setPassword("wrong");
        userService.login(userDto);
    }
}
