package com.project.toyple.project;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

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

}
