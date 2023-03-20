package com.project.toyple.language;

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
//@Table(name = "language")
public class LanguageDto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int seq;
    @ManyToOne(cascade = CascadeType.PERSIST)
//    @JoinColumn(name = "projectId", insertable=false, updatable=false,
//            referencedColumnName = "projectId")
    @JoinColumn(name = "id",insertable = false, updatable = false)
    private ProjectDto projectDto;

    @Column
    private String language;

    @Builder
    public LanguageDto(String language, ProjectDto projectDto){
        this.language = language;
        this.projectDto = projectDto;
    }

    public static LanguageDto createLanguage(String language, ProjectDto projectDto){
        return LanguageDto.builder()
                .language(language)
                .projectDto(projectDto)
                .build();
    }

//    @ManyToOne
//    @JoinColumn(name = "project_dto_project_id")
//    private ProjectDto projectDto;

}
