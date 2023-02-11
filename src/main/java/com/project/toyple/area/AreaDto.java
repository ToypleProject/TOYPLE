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
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id")
    private ProjectDto project_id;
    private String area; //지역

    //생성 메서드
    public static AreaDto createAreaDto(AreaDto area){
        AreaDto areaDto = new AreaDto();
        areaDto.setArea(area.getArea());
        return areaDto;
    }

    //비즈니스 로직

    //생성 로직

}

//package com.project.toyple.area;
//
//import com.project.toyple.project.ProjectDto;
//import lombok.*;
//
//import javax.persistence.*;
//import java.util.List;
//
//@Getter
//@Setter
//@Entity
//@DiscriminatorValue("area")
//public class AreaDto extends ProjectDto{
//    private String area;
//
//    public static List<AreaDto> findAll() {
//    }
//}

