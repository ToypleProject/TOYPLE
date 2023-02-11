package com.project.toyple.project;

//import com.project.toyple.area.AreaDao;
import com.project.toyple.area.AreaDto;
//import com.project.toyple.area.AreaService;
import com.project.toyple.job.JobDto;
import com.sun.org.apache.xpath.internal.operations.Mod;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
@AllArgsConstructor
//@RequestMapping(value="/project")
public class ProjectController {
    private final ProjectService projectService;
//    private final AreaService areaService;

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
    public String save(@ModelAttribute ProjectDto projectDto, @RequestParam Map<String,String> map,
                       @RequestParam(value = "area") List<String> area, Model model){
        System.out.println("글 추가 확인");
        System.out.println("area.siae() 확인 : " + area.size());
        projectDto.setProjectNm(map.get("project_nm"));
        projectDto.setComment(map.get("content"));
//        List<AreaDto> areas = new ArrayList<AreaDto>();
        Long count = 0L;

        System.out.println("projectDto Project_id() 확인 : " + projectDto.getProjectId());

        AreaDto areaDto = new AreaDto();
        for (int i =0; i<area.size(); i++){
            System.out.println("area.get(i) 확인 : " + area.get(i));
            areaDto.setArea(area.get(i));
        }
//        areaService.save(areaDto);
        projectService.save(projectDto);
//        projectService.areaSave(areaDto);
        System.out.println("projectDto Project_id() 저장 후 확인 : " + projectDto.getProjectId());

        model.addAttribute("form", new ProjectForm());
        return "redirect:/";
    }

    //게시글 목록
    @RequestMapping(value = "/", method=RequestMethod.POST)
    public String findAll(Model model){
        //DB에서 전체 게시글 데이터를 가져와서 main.html에 보여주기
        List<ProjectDto> projectDtoList = projectService.findAll();
        System.out.println("가져온 데이터 확인" + projectDtoList.get(1));
        System.out.println("가져온 데이터 확인" + projectDtoList.get(2));
        model.addAttribute("projectList", projectDtoList);
        return "main";
    }

//    @PostMapping(value = "/project/save")
//    public String createForm(ProjectForm form){
//        AreaDto p = new AreaDto();
//        p.setProjectId(form.getProjectId());
//        p.setProjectNm(form.getProjectNm());
//        p.setDeadline(form.getDeadline());
//        p.setComment(form.getComment());
//        p.setCloseDt(form.getCloseDt());
//        p.setUserId(form.getUserId());
//        p.setStatus(form.getStatus());
//        p.setArea(form.getArea());
//
//
////        job.setJob(form.getJob());
//
//        projectService.save(p);
//
//        return "redirect:/";
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
