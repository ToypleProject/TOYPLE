package com.project.toyple.project;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ProjectDaoTest {
    @Autowired
    private ProjectDao projectDao;
    @Test
    void test(){
        ProjectDto pro = ProjectDto.builder()
                .projectNm("projectNm1")
                .content("proejct1 content")
                .deadline("2022")
                .comment("commnet")
                .closeDt("12/23")
                .userId("userId123")
                .build();

        //테이블 생성 후 데이터 넣어서 완성하기
        projectDao.save(new ProjectDto());
        //projectDao에 있는 모든 데이터 가져오기
        System.out.println(">>>프로젝트 이름 : " + pro.getProjectNm());
    }
}
