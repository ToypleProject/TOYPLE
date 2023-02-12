package com.project.toyple.project;

import org.springframework.data.jpa.repository.JpaRepository;

//인터페이스 선언만으로 jpa관련된 많은 메서드 활용 가능
public interface ProjectDao extends JpaRepository<ProjectDto, Long> {


}
