package com.project.toyple.user;

import com.project.toyple.exception.NotAuthenticatedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

//@Component
public class AuthProvider implements AuthenticationProvider {
    @Autowired
    UserService userService;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        System.out.println("!!!!!!!!!!!!!!!@@####");
        String id = authentication.getName();
        String password = authentication.getCredentials().toString();
        UserDto user = (UserDto)userService.loadUserByUsername(id);
        System.out.println("id: " + id + ",    AuthStatus: " + user.getAuthStatus());

        if (user == null) { //아이디 없음
            System.out.println("UserNameNotFoundException");
            throw new UsernameNotFoundException(id);
        } else if (!user.getPassword().equals(password)) { //password 실패시
            System.out.println("BadCredentialException");
            throw new BadCredentialsException(id);//보안정책상 id가 있어서
        }  else if (!user.isAccountNonLocked()) {
            throw new LockedException("LockedException");//이메일 인증 안하고 로그인 했을 때
        } else if (user.getAuthStatus() == 0) {
            System.out.println("NotAuthenticatedException");
            throw new NotAuthenticatedException(id);
        }

        return null;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return false;
    }
}
