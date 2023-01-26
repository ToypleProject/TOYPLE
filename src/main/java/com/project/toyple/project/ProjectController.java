package com.project.toyple.project;

import com.sun.org.apache.xpath.internal.operations.Mod;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller
@AllArgsConstructor
//@RequestMapping(value="/project")
public class ProjectController {
    private final ProjectService projectService;

    //메인 페이지
    @RequestMapping(value="/", method=RequestMethod.GET)
    public String mainForm(Model model) {
        System.out.println("타임리프 데이터 확인 ");
        List<ProjectDto> projectDtoList = projectService.findAll();
        model.addAttribute("projectList", projectDtoList);
//        model.addAttribute("testMessage", "TEST!!!");
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
        return "redirect:/";
    }

    //게시글 목록
//    @RequestMapping(value = "/", method=RequestMethod.POST)
//    public String findAll(Model model){
//            //DB에서 전체 게시글 데이터를 가져와서 main.html에 보여주기
//        List<ProjectDto> projectDtoList = projectService.findAll();
//        System.out.println("가져온 데이터 확인" + projectDtoList.get(1));
//        System.out.println("가져온 데이터 확인" + projectDtoList.get(2));
//        model.addAttribute("projectList", projectDtoList);
//        return "main";
//    }


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
