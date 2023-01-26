package com.project.toyple.project;

import org.springframework.stereotype.Service;

import java.util.List;

public interface ProjectService {
    void save(ProjectDto projectDto);
    public List<ProjectDto> findAll();
}
