package com.project.toyple.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

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

    // 비밀번호 찾기 창으로 이동
    @RequestMapping(value="/user/find/password/form")
    public String findPasswordForm() {
        return "findpwd";
    }

    // 입력받은 정보가 회원정보와 일치하는지 확인하고 메일 전송
    @RequestMapping(value="/user/find/password")
    public String findPassword(UserDto userDto, Model model) {
        if (userService.checkUserInfo(userDto)) {
            String randomKey = userService.sendAuthEmail(userDto);
            model.addAttribute("error", false);
            model.addAttribute("userId", userDto.getUserId());
            model.addAttribute("userName", userDto.getUserName());
            model.addAttribute("email", userDto.getEmail());
            model.addAttribute("randomKey", randomKey);
        } else {
            model.addAttribute("error", true);
            model.addAttribute("message", "입력하신 정보와 일치하는 회원이 없습니다.");
        }

        return "findpwd";
    }

    // 인증번호 입력 페이지로 이동
    @RequestMapping(value="/user/find/password/auth/form")
    public String findPasswordAuthForm() {
        return "success_pwd";
    }

    // 입력받은 코드가 인증코드와 일치하는지 확인하고 비밀번호 변경 페이지로 이동
    @RequestMapping(value="/user/find/password/auth")
    public String findPasswordAuth(UserDto userDto, Model model, String randomKey, String code) {
//        System.out.println(userDto.getUserId());
//        System.out.println(userDto.getUserName());
//        System.out.println(userDto.getEmail());

        if (passwordEncoder.matches(code, randomKey)) {
            model.addAttribute("error", false);
        } else {
            model.addAttribute("error", true);
            model.addAttribute("message", "인증번호가 일치하지 않습니다.");
        }

        return "success_pwd";
    }

    // 인증 코드 재전송
    @RequestMapping(value="/user/find/password/resend")
    public String resendEmail(UserDto userDto, Model model) {
        System.out.println(userDto.getUserName());
        System.out.println(userDto.getEmail());
        String randomKey = userService.sendAuthEmail(userDto);
        model.addAttribute("randomKey", randomKey);

        return "success_pwd";
    }

    // 비밀번호 변경 작업 수행
    @RequestMapping(value="/user/find/password/change/form")
    public String findPasswordChangeForm() {
        return "change_pwd";
    }

    @RequestMapping(value="/user/find/password/change")
    public String findPasswordChange(String userId, String pswd1) {
        userService.changePassword(userId, pswd1);

        return "redirect:/user/login";
    }
}