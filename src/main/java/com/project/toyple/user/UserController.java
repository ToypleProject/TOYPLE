package com.project.toyple.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class UserController {
    @Autowired
    UserService userService;

    // 로그인 창으로 이동
    @RequestMapping(value="/user/login", method=RequestMethod.GET)
    public String loginForm() {
        return "login/index";
    }

    // 로그인 작업 수행
//    @RequestMapping(value="/user/login", method=RequestMethod.POST)
//    public String login(String id, String pswd1) {  // TODO: join() 처럼 UserDto를 인자로 받도록 고치기
//        UserDto userDto = new UserDto();
//        userDto.setUserId(id);
//        userDto.setPassword(pswd1);
//        userService.login(userDto);
//
//        return "login/index";  // TODO: 메인페이지 완성되면 메인페이지로 바꾸기
//    }

    // 회원가입 창으로 이동
    @RequestMapping(value="/user/join", method=RequestMethod.GET)
    public String joinForm() {
        return "membership/index";
    }

    // 회원가입 작업 수행
    @RequestMapping(value="/user/join", method=RequestMethod.POST)
    public String join(UserDto userDto) {
        userService.join(userDto);
        return "redirect:/user/login";
    }

}
