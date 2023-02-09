package com.project.toyple.user;

import javax.mail.MessagingException;

public interface UserService {
    String join(UserDto userDto);
    boolean checkUserInfo(UserDto userDto);
    String sendAuthEmail(UserDto userDto);
    void changePassword(String userId, String password);
}
