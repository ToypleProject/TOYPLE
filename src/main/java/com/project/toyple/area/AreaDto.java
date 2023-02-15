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
//@Entity
//@NoArgsConstructor(access = AccessLevel.PROTECTED)
//@Table(name = "area_id")
public class AreaDto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int seq;

    private String area; //지역

    @ManyToOne(cascade = CascadeType.PERSIST)
//    @JoinColumn(name = "projectId",referencedColumnName = "projectId")
//    @JoinColumn( insertable=false, updatable=false)
//    @JoinColumn
    @JoinColumn(name = "id", insertable = false, updatable = false)
//    @ForeignKey(value=ConstraintMode.NO_CONSTRAINT)
    private ProjectDto projectDto;

    @Builder
    public AreaDto(String area, ProjectDto projectDto){
        this.area = area;
        this.projectDto = projectDto;
    }

    public static AreaDto createArea(String area, ProjectDto projectDto){
        return AreaDto.builder()
                .area(area)
                .projectDto(projectDto)
                .build();
    }
}



