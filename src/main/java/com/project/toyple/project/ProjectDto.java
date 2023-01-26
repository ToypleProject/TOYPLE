package com.project.toyple.project;

import com.project.toyple.area.AreaDto;
import com.project.toyple.job.JobDto;
import com.project.toyple.language.LanguageDto;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="project")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProjectDto {
    @Id //pk 설정
    @GeneratedValue //생성된 값 사용
    private Long projectId;//_언더바 사용시
    private String projectNm;
    @Column
    private String content;
    private String deadline;//마감시간
    private String comment;
    private String closeDt;//끝난시간
    private String userId;
    @Column
    private String status;
    @OneToMany
    @JoinColumn(name = "area")
    private List<AreaDto> areas = new ArrayList<AreaDto>();
    @OneToMany
    @JoinColumn(name = "job")
    private List<JobDto> jobs = new ArrayList<JobDto>();

    @OneToMany
    @JoinColumn(name = "language") //column
    private List<LanguageDto> languages = new ArrayList<LanguageDto>();

    public static ProjectDto toSaveDto(ProjectDto dto){ //view에서 dao로 이동
        ProjectDto projectDto = new ProjectDto();
        projectDto.setProjectNm(dto.getProjectNm());
        projectDto.setContent(dto.getContent());
        return projectDto;
    }


}
