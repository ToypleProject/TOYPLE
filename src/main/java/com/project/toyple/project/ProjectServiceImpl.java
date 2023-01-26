package com.project.toyple.project;

import lombok.AllArgsConstructor;
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
    public void save(ProjectDto dto) {
        ProjectDto projectDto = ProjectDto.toSaveDto(dto);
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
        return projectList;
    }

}
