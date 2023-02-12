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
//@Table(name = "area")
public class AreaDto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="area_id")
    private int id;

    private String area; //지역

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_Id")
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



