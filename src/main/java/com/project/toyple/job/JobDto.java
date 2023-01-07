package com.project.toyple.job;

import com.project.toyple.project.ProjectDto;
import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@Data
@Builder
@Entity
@Table
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
