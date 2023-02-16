package com.project.toyple.user;

import javax.mail.MessagingException;

public interface UserService {
    String join(UserDto userDto);
    boolean checkUserInfo(UserDto userDto);
    String makeRandomKey();
    String sendEmailKey(UserDto userDto);
    String sendEmailLink(UserDto userDto, String randomKey);
    void updateAuthStatus(String userId, String randomKey);
    void changePassword(String userId, String password);
    String findId(UserDto userDto);
}
