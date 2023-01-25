package com.project.toyple.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

@EnableWebSecurity  // 스프링 시큐리티 필터를 스프링 필터체인에 등록함
@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    private final AuthenticationFailureHandler customFailureHandler;

    @Bean  // 해당 메서드의 리턴되는 오브젝트를 IoC로 등록해준다.
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    @Bean
//    @Order(SecurityProperties.BASIC_AUTH_ORDER)
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeRequests()
//            .antMatchers("/").authenticated()  // TODO: 나중에 원하는 페이지만 접근 허용하도록 설정 변경하기
            .anyRequest().permitAll()
            .and()
            .formLogin()
            .loginPage("/login")  // 권한이 없는 페이지 요청 시 로그인 페이지로 이동시킴
            .loginProcessingUrl("/user/login")  // 이 주소가 호출되면 spring security가 낚아채서 로그인작업을 진행해준다.
            .defaultSuccessUrl("/")  // 로그인 성공 후 리다이렉트 주소
            .failureUrl("/user/login?error=true")  // 로그인 실패 후 리다이렉트 주소
            .usernameParameter("userId")
            .passwordParameter("password")
            //.failureHandler(customFailureHandler);
            .and()
            .logout()
            .logoutSuccessUrl("/")
            .invalidateHttpSession(true);
        return http.build();
    }
}
