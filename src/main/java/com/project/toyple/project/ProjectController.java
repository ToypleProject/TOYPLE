package com.project.toyple.project;

//import com.project.toyple.area.AreaDao;
import com.project.toyple.area.AreaDto;
//import com.project.toyple.area.AreaService;
import com.project.toyple.job.JobDto;
import com.project.toyple.language.LanguageDto;
import lombok.AllArgsConstructor;
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
        List<ProjectDto> projectDtoList = projectService.findAll();
        model.addAttribute("projectList", projectDtoList);
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
                       @RequestParam(value = "area",required = false) List<String> area
                        ,@RequestParam(value = "job",required = false) List<String> job
                      ,@RequestParam(value = "language",required = false) List<String> language
                       , Model model){
        System.out.println("글 추가 확인");
//        System.out.println("areaList확인 : " + area.size());
//        System.out.println("jobList확인 : " + job.size());
//        System.out.println("languagesList확인 : " + language.size());

        projectDto.setProjectNm(map.get("project_nm"));
        projectDto.setContent(map.get("content"));

        ArrayList<AreaDto> areas = new ArrayList<>();
        for (int i =0; i<area.size(); i++){
//            System.out.println("area.get(i) 확인 : " + area.get(i));
            AreaDto areaDto = new AreaDto();
            areaDto.setArea(area.get(i));
            areas.add(areaDto);
        }
        projectDto.setAreas(areas);

        ArrayList<JobDto> jobDtos = new ArrayList<>();
//        if(job.isEmpty() ==  true) {
//            break;
            for (int i = 0; i < job.size(); i++) {
//            System.out.println("ViewjobList확인:" + job.get(i));
                JobDto jobDto = new JobDto();
                jobDto.setJob(job.get(i));
                jobDtos.add(jobDto);
            }

//        }
        projectDto.setJobs(jobDtos);

        ArrayList<LanguageDto> languageDtos = new ArrayList<>();
        for(int i=0; i<language.size(); i++){
//            System.out.println("ViewLanguages확인:"+language.get(i));
            LanguageDto languageDto = new LanguageDto();
            languageDto.setLanguage(language.get(i));
            languageDtos.add(languageDto);
        }
        projectDto.setLanguages(languageDtos);

        //참조받는 테이블에 값을 먼저 들어가서 에러가 발생

        //save() 사용해서 저장
        projectService.creaetProjectAndAreas(projectDto);
//        projectService.save(projectDto);

//        System.out.println("projectDto Project_id() 저장 후 확인 : " + projectDto.getProjectId());
//        for (int i =0; i<projectDto.getAreas().size(); i++){
//            System.out.println("projectDto.getAreas() 데이터 확인 : "
//                    + areas.get(i).getArea().toString());
//        }

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
