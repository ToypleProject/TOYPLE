package com.project.toyple.project;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    ProjectDao projectDao;

    @Override
    public void listProject(ProjectDto projectDto) {
        System.out.println("데이터 확인 작업" + projectDto.getProjectId());

    }
//    @Override
//    public Long save(ProjectDto requestDao) {
//        return projectDao.save(requestDao.)
//    }

}
