package com.project.toyple.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {
    @Autowired
    UserService userService;

    // 로그인 창으로 이동
    @RequestMapping(value="/user/login", method=RequestMethod.GET)
    public String loginForm(@RequestParam(value="error", required=false) String error,
                            @RequestParam(value="exception", required=false) String exception,
                            Model model) {
        model.addAttribute("error", error);
        model.addAttribute("exception", exception);
        return "login";
    }

    // 회원가입 창으로 이동
    @RequestMapping(value="/user/join", method=RequestMethod.GET)
    public String joinForm(@RequestParam(value="error", required=false) String error,
                           @RequestParam(value="exception", required=false) String exception,
                           Model model) {
        model.addAttribute("error", error);
        model.addAttribute("exception", exception);
        return "join";
    }

    // 회원가입 작업 수행
    @RequestMapping(value="/user/join", method=RequestMethod.POST)
    public String join(UserDto userDto) {
        String url = userService.join(userDto);
        return url;
    }

}
