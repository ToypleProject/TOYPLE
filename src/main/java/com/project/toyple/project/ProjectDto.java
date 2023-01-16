package com.project.toyple.project;

import com.project.toyple.area.AreaDto;
import com.project.toyple.job.JobDto;
import com.project.toyple.language.LanguageDto;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name="project")
public class ProjectDto {
    @Id //pk 설정
    @GeneratedValue //생성된 값 사용
    private String projectId;//_언더바 사용시
    private String projectNm;
    @Column
    private String content;
    private String deadline;
    private String comment;
    private String closeDt;
    private String userId;
    @Column
    private String status;
    @OneToMany
    @JoinColumn(name = "language") //column
    private List<LanguageDto> languages = new ArrayList<LanguageDto>();

    @OneToMany
    @JoinColumn(name = "area")
    private List<AreaDto> areas = new ArrayList<AreaDto>();

    @OneToMany
    @JoinColumn(name = "job")
    private List<JobDto> jobs = new ArrayList<JobDto>();
}
