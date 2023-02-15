package com.project.toyple.job;

import com.project.toyple.area.AreaDto;
import com.project.toyple.project.ProjectDto;
import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@Builder
@Entity
//@Table(name="job")
public class JobDto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int seq;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "id",insertable = false, updatable = false)
//    @JoinColumn
    private ProjectDto projectDto;
    private String job;

    @Builder
    public JobDto(String job, ProjectDto projectDto){
        this.job = job;
        this.projectDto = projectDto;
    }

    public static JobDto createJob(String job, ProjectDto projectDto){
        return JobDto.builder()
                .job(job)
                .projectDto(projectDto)
                .build();
    }


}

//@Getter
//@Setter
//@Entity
//@DiscriminatorValue("job")
//public class JobDto extends ProjectDto {
//    private String job;
//
//}