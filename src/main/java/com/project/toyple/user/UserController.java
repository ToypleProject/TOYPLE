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
        System.out.println("!!!!!!!!!!login()!!!!!!!!!");
        return "login/index";
    }

    // 로그인 창에서 로그인 버튼 눌렀을 때
    // TODO: js에서 경로 여기로 보내는지 확인하기
    @RequestMapping(value="/user/login", method=RequestMethod.POST)
    public String login(String id, String password) {
        System.out.println("@@@@@@@@@@@@login()@@@@@@@");
        UserDto userDto = new UserDto();
        userDto.setUserId(id);
        userDto.setPassword(password);
        userService.login(userDto);
        System.out.println("#######login()#########");

        return "login/index";  // TODO: 메인페이지 완성되면 메인페이지로 바꾸기
    }

}
