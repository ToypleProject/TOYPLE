package com.project.toyple.project;

import com.project.toyple.area.AreaDto;
import com.project.toyple.job.JobDto;
import com.project.toyple.language.LanguageDto;
import lombok.*;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@Builder
@Entity
//@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ProjectDto implements Serializable {
    @Id //pk 설정
    @GeneratedValue(strategy = GenerationType.AUTO) //생성된 값 사용
    @Column(name = "id")
    private int id;//_언더바 사용시
    private String projectNm;
    private String content;

//    private String deadline;//마감시간
//    private String comment;
//    private String closeDt;//끝난시간
//    private String userId;
//    @Column
//    private String status;

@Nullable
    @OneToMany
            (
            cascade = CascadeType.ALL, orphanRemoval = true)
    private List<AreaDto> areas = new ArrayList<>();
    @Nullable
    @OneToMany
            (
            cascade = CascadeType.ALL, orphanRemoval = true)
    public List<JobDto> jobs = new ArrayList<>();
    @Nullable
    @OneToMany
            (
             cascade = CascadeType.ALL, orphanRemoval = true)
    private List<LanguageDto> languages = new ArrayList<>();

    @Builder
    public ProjectDto(String projectNm, String content, List<AreaDto> areas, List<JobDto> jobs, List<LanguageDto> languages){
        this.projectNm = projectNm;
        this.content = content;
        this.areas.addAll(areas);
        this.jobs.addAll(jobs);
        this.languages.addAll(languages);
    }

    public static ProjectDto createProject(String projectNm, String content){
        return ProjectDto.builder()
                .projectNm(projectNm)
                .content(content)
                .build();
    }

    public void putArea(AreaDto areaDto){
        areas = new ArrayList<AreaDto>();
        this.areas.add(areaDto);

        if (areaDto.getProjectDto() != this) { // 추가
            areaDto.setProjectDto(this);
        }
        System.out.println("값 확인"+areaDto.getArea());
    }

    public void putJob(JobDto jobDto){
        jobs = new ArrayList<JobDto>();
        this.jobs.add(jobDto);
    }

    public void putlanguage(LanguageDto languageDto){
        languages = new ArrayList<LanguageDto>();
        this.languages.add(languageDto);
    }


    public static ProjectDto toSaveDto(ProjectDto dto){ //view에서 dao로 이동
        ProjectDto projectDto = new ProjectDto();
        projectDto.setProjectNm(dto.getProjectNm());
        projectDto.setContent(dto.getContent());
//        projectDto.setAreas(dto.areas);
        return projectDto;
    }
}
//비즈니스 로직
//    @OneToMany
//    @JoinColumn(name = "job")
//    public List<JobDto> jobs = new ArrayList<JobDto>();
//


//연관관계 메서드
//    public void addArea(AreaDto area){
//        areas.add(area);
//        area.setProject_id(this);
//    }

    //생성 메서드
//    public static ProjectDto createProject(AreaDto... areas){
//        ProjectDto dto = new ProjectDto();
//        dto.setProjectNm(dto.getProjectNm());
//        dto.setContent(dto.getContent());
//        for (AreaDto area : areas){
//            dto.addArea(area);
//        }
//        return dto;
//    }

//조회 로직
//    public int getProjectList(){
//        ProjectDto project;
//        for(AreaDto area : areas){
//            project.addArea(area);
//        }
//        return project;
//    }
    //==연관관계 메서드==//
//    public void setMember(Member member) {
//        this.member = member;
//        member.getOrders().add(this);
//    }
//    public void addOrderItem(OrderItem orderItem) {
//      orderItems.add(orderItem);
//    orderItem.setOrder(this);
//}

    //==생성 메서드==//
//    public static Order createOrder(Member member, Delivery delivery,
//                                    OrderItem... orderItems) {
//        Order order = new Order();
//        order.setMember(member);
//        order.setDelivery(delivery);
//        for (OrderItem orderItem : orderItems) {
//            order.addOrderItem(orderItem);
//        }
//        order.setStatus(OrderStatus.ORDER);
//        order.setOrderDate(LocalDateTime.now());
//        return order;
//    }

//    public static ProjectDto toSaveDto(ProjectDto dto){ //view에서 dao로 이동
//        ProjectDto projectDto = new ProjectDto();
//        projectDto.setProjectNm(dto.getProjectNm());
//        projectDto.setContent(dto.getContent());

//        AreaDto areaDto = new AreaDto();
//        for (int i =0; i<dto.areas.size(); i++){
//            System.out.println("projectDto에서 AreaDtg List값 확인 : "
//                    + dto.areas.get(i).getSeq()
//                    + dto.areas.get(i).getArea().toString());
////                 areaDto.setProject_id(lastElement);
//                areaDto.setArea(dto.areas.get(i).getArea().toString());
//        }
//        projectDto.setAreas(dto.areas);
//
//        return projectDto;
//    }

//    public static ProjectDto addSaveArea(ProjectDto dto,Long areaNum){ //view에서 dao로 이동
//        ProjectDto projectDto = new ProjectDto();
//
//        AreaDto areaDto = new AreaDto();
//        for (int i =0; i<dto.areas.size(); i++){
//            System.out.println("projectDto에서 AreaDtg List값 확인 : "
//                    + dto.areas.get(i).getArea().toString());
//                areaDto.setArea(dto.areas.get(i).getArea().toString());
//        }
//        projectDto.setAreas(dto.areas);
//
//        return projectDto;
//    }