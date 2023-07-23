package com.project.toyple.user;

import org.springframework.security.authentication.AccountStatusException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import javax.mail.MessagingException;

public interface UserService extends UserDetailsService {
    UserDetails loadUserByUsername(String userId);
    String join(UserDto userDto, String randomKey);
    boolean checkUserInfo(UserDto userDto);
    String makeRandomKey();
    String sendEmailKey(UserDto userDto);
    String sendEmailLink(UserDto userDto, String randomKey);
    void updateAuthStatus(String userId, String randomKey);
    void changePassword(String userId, String password);
    String findId(UserDto userDto);
    UserDto getUserDtoById(String userId);
//    ArrayList<ProjectDto> getProjectDtoBYUserId(); // mypage에 있는 projectList 때문에 필요함
}
