package com.project.toyple.config;

import com.project.toyple.exception.NotAuthenticatedException;
import com.project.toyple.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AccountStatusException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLEncoder;

@Component
public class CustomFailureHandler extends SimpleUrlAuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
                                        AuthenticationException exception) throws IOException, ServletException {
        String errorMessage;

        if (exception instanceof BadCredentialsException || exception instanceof InternalAuthenticationServiceException) {
            errorMessage = "아이디 또는 비밀번호를 다시 한번 확인해 주세요.";
        } else if (exception instanceof UsernameNotFoundException) {
            // 아마 실행 안되는 코드일듯(UsernameNotFoundException -> BadCredentialsException)
            errorMessage = "존재하지 않는 회원입니다.";
        } else if (exception instanceof LockedException) {
            errorMessage = "이메일 인증 후 로그인해 주세요.";
            //TODO: userService.sendEmailLink();로 이메일 다시 보내기? 아님 다른 핸들러를 구현하며 처리할 수 있나?
        } else {
            errorMessage = "알 수 없는 이유로 로그인에 실패하였습니다.";
        }
        errorMessage = URLEncoder.encode(errorMessage,"UTF-8");
        setDefaultFailureUrl("/user/login?error=true&exception=" + errorMessage);
        super.onAuthenticationFailure(request, response, exception);
    }


}
