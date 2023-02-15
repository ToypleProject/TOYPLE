package com.project.toyple.project;

//import com.project.toyple.area.AreaDao;
import com.project.toyple.area.AreaDto;
import com.project.toyple.job.JobDto;
import com.project.toyple.language.LanguageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    private final ProjectDao projectDao;

    @Override
    public void creaetProjectAndAreas(ProjectDto projectDto) {
        ProjectDto dto = ProjectDto.createProject(
                projectDto.getProjectNm(),
                projectDto.getContent()
        );
        List<AreaDto> areas = projectDto.getAreas();
        for(AreaDto areaDto : areas){
            AreaDto area = AreaDto.createArea(areaDto.getArea(),dto);
            System.out.println("createArea값확인:"+area.getArea());
            dto.putArea(area);
            System.out.println("여기로 안 넘어가지는 건가?");
        }
        dto.setAreas(areas);

        List<JobDto> jobs = projectDto.getJobs();
        for(JobDto jobDto : jobs){
            JobDto job = JobDto.createJob(jobDto.getJob(),dto);
            dto.putJob(job);
        }
        dto.setJobs(jobs);

        List<LanguageDto> languages = projectDto.getLanguages();
        for(LanguageDto languageDto : languages){
            LanguageDto language = LanguageDto.createLanguage(languageDto.getLanguage(),dto);
            dto.putlanguage(language);
        }
        dto.setLanguages(languages);
        projectDao.save(projectDto);
    }
    @Override
    public List<ProjectDto> findAll() {
        //entity에서 dto로 옮겨담기
        List<ProjectDto> ProjectDtoList = projectDao.findAll();//db에서 가져온 데이터
        List<ProjectDto> projectList = new ArrayList<>();
        for(ProjectDto projectDto: ProjectDtoList){//db에서 꺼내온 데이터를 projectDto에 나열
            projectList.add(ProjectDto.toSaveDto(projectDto));//변환된 데이터를 dtoList에 담는다
        }
        return ProjectDtoList;
    }

//    @Override
//    public void save(ProjectDto dto) {
//        ProjectDto projectDto = ProjectDto.toSaveDto(dto);
//        projectDao.save(projectDto);
//저장 후에 꺼내서 사용
//        ProjectDto p = new ProjectDto();
//        List<ProjectDto> projectDtoList = projectDao.findAll();//db에서 가져온 데이터
//        for (int i =0; i<projectDtoList.size(); i++){
//            projectDtoList.get(i).getProjectId();
//            System.out.println("projectDtoList.get(i).getProjectId();데이터 확인 : "
//                    +  projectDtoList.get(i).getProjectId());
//        }
//        int lastInx = projectDtoList.size()-1;
//        Long lastElement = projectDtoList.get(lastInx).getProjectId();
//        System.out.println("lastElement 마지막 값 가져오기: "
//                +  lastElement);
//        ProjectDto projectAreaDto = ProjectDto.addSaveArea(dto,lastElement);
//        projectDao.save(projectAreaDto);
//    }

//    @Override
//    public void areaSave(AreaDto area) {
//        AreaDto areaDto = AreaDto.createAreaDto(area);
//        areaDao.save(areaDto);
//    }

}
