package com.project.toyple.project;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Getter
@Setter
public class ProjectForm {
    private Long projectId;//_언더바 사용시
    private String projectNm;
    private String content;
    private String deadline;//마감시간
    private String comment;
    private String closeDt;//끝난시간
    private String userId;
    private String status;
}
