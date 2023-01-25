package com.project.toyple.job;

import com.project.toyple.project.ProjectDto;
import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
@Builder
@Entity
@Table(name="job")
public class JobDto {

    @Id
    @Column(name="seq")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int seq;
    @ManyToOne
    @JoinColumn(name = "project_id", insertable = false, updatable = false)
    private ProjectDto project_id;
    private String job;
}
