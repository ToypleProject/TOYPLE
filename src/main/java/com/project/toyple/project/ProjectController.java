package com.project.toyple.project;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@AllArgsConstructor
public class ProjectController {
    private ProjectService projectService;

    //메인 화면
    @RequestMapping(value = "/")
    public String projectForm(Model model){
        System.out.println("main에서 project 리스트 확인");
//        ProjectDto projectDto = new ProjectDto();
//        System.out.println("projectDto 데이터 넘어노는 것 확인 " + projectDto.getProjectNm());
//        String name2 = projectDto.getProjectNm();
        model.addAttribute("name","name123123");
        return "main.html";
    }

    //글 추가
//    @PostMapping("/saveProject/post")
//    public String save(@RequestBody ProjectDto requestDto){
//        System.out.println("saveProject 값 들어오는 것 확인");
//        return projectService.save(requestDto);
////        return "project/new.html";
//    }
}
