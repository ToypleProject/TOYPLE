package com.project.toyple.user;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
public class UserDaoTests {
    @Autowired
    UserDao userDao;

    @Test
    public void selectTest() {
        Optional<UserDto> result = userDao.findById("daypark");
        if (result.isPresent()) {
            UserDto user = result.get();
            System.out.println(user.getUserId());
        }
    }
}
