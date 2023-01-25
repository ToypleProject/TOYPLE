package com.project.toyple.area;

import com.project.toyple.project.ProjectDto;
import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "area")
//일대다관계에서 한쪽만
public class AreaDto {

    @Id
    @Column(name="seq")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int seq;
    @ManyToOne
    @JoinColumn(name = "project_id")
    private ProjectDto project_id;
    private String area;

}
