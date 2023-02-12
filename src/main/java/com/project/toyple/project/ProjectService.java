package com.project.toyple.project;

//import com.project.toyple.area.AreaDao;

import java.util.List;

public interface ProjectService {
//    void save(ProjectDto projectDto);

    void creaetProjectAndAreas(ProjectDto projectDto);

//    void areaSave(AreaDto area);
    public List<ProjectDto> findAll();
}
