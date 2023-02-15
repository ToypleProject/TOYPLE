package com.project.toyple.language;

import com.project.toyple.project.ProjectDto;
import lombok.*;

import javax.persistence.*;
@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@Builder
@Entity
//@Table(name = "language")
public class LanguageDto {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int seq;
    @ManyToOne(cascade = CascadeType.PERSIST)
//    @JoinColumn(name = "projectId", insertable=false, updatable=false,
//            referencedColumnName = "projectId")
    @JoinColumn(name = "id")
    private ProjectDto projectDto;

    @Column
    private String language;

//    @ManyToOne
//    @JoinColumn(name = "project_dto_project_id")
//    private ProjectDto projectDto;

}
