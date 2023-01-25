package com.project.toyple.project;

import com.sun.org.apache.xpath.internal.operations.Mod;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@AllArgsConstructor
//@RequestMapping(value="/project")
public class ProjectController {
    private final ProjectService projectService;

    //메인 페이지
    @RequestMapping(value="/", method=RequestMethod.GET)
    public String loginForm(Model model) {
        System.out.println("타임리프 데이터 확인 ");
        model.addAttribute("testMessage", "TEST!!!");
        return "main";
    }

    //게시글 추가 버튼
    @RequestMapping(value = "/project/add", method=RequestMethod.GET)
    public String add(){
        return "new";
    }

    //게시글 저장
    @RequestMapping(value = "/project/save", method=RequestMethod.POST)
    public String save(@ModelAttribute ProjectDto projectDto, @RequestParam Map<String,String> map){
        System.out.println("글 추가 확인");
        projectDto.setProjectNm(map.get("project_nm"));
        projectDto.setComment(map.get("content"));
        projectService.save(projectDto);
        return "redirect:/main";
    }

    //글 작성 시 상세 페이지
//    @RequestMapping(value = "/")
//    public String projectForm(@ModelAttribute ProjectDto projectDto){
//        System.out.println("main에서 project 리스트 확인");
////        ProjectDto projectDto = new ProjectDto();
////        System.out.println("projectDto 데이터 넘어노는 것 확인 " + projectDto.getProjectNm());
////        String name2 = projectDto.getProjectNm();
//        Long id = projectService.save(projectDto);
//        return "redirect:/project/"+id;
//    }

}
