package com.project.toyple.area;

import com.project.toyple.project.ProjectDto;
import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
<<<<<<< HEAD
@Table(name="area")
=======
@Table(name = "area")
>>>>>>> 419513a677250d271a51764ad06f42d46121eac0
//일대다관계에서 한쪽만
public class AreaDto {

    @Id
    @Column(name="seq")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int seq;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id")
    private ProjectDto project_id;
    private String area;

}
