package com.project.toyple.project;

//import com.project.toyple.area.AreaDao;
import com.project.toyple.area.AreaDto;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ProjectService {
    void save(ProjectDto projectDto);

//    void areaSave(AreaDto area);
    public List<ProjectDto> findAll();
}
