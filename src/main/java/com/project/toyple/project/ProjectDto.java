package com.project.toyple.project;

import com.project.toyple.area.AreaDto;
import com.project.toyple.job.JobDto;
import com.project.toyple.language.LanguageDto;
import lombok.*;

import javax.persistence.*;
import java.awt.geom.Area;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name="project")
public class ProjectDto {
    @Id //pk 설정
    @GeneratedValue //생성된 값 사용
    private Long projectId;//_언더바 사용시
    private String projectNm;
    @Column
    private String content;
    private String deadline;//마감시간
    private String comment;
    private String closeDt;//끝난시간
    private String userId;
    @Column
    private String status;
    @OneToMany(mappedBy = "area",cascade = CascadeType.ALL)
    private List<AreaDto> areas = new ArrayList<AreaDto>();
    //연관관계 메서드
    public void addArea(AreaDto area){
        areas.add(area);
        area.setProject_id(this);
    }
    //생성 메서드
    public static ProjectDto createProject(AreaDto... areas){
        ProjectDto dto = new ProjectDto();
        dto.setProjectNm(dto.getProjectNm());
        dto.setContent(dto.getContent());
        for (AreaDto area : areas){
            dto.addArea(area);
        }
        return dto;
    }
    //비즈니스 로직
    @OneToMany
    @JoinColumn(name = "job")
    public List<JobDto> jobs = new ArrayList<JobDto>();

    //조회 로직
//    public int getProjectList(){
//        ProjectDto project;
//        for(AreaDto area : areas){
//            project.addArea(area);
//        }
//        return project;
//    }
    @OneToMany
    @JoinColumn(name = "language") //column
    private List<LanguageDto> languages = new ArrayList<LanguageDto>();

    public static ProjectDto toSaveDto(ProjectDto dto){ //view에서 dao로 이동
        ProjectDto projectDto = new ProjectDto();
        projectDto.setProjectNm(dto.getProjectNm());
        projectDto.setContent(dto.getContent());
        System.out.println("toSaveDto---------아니 왜 값이 아예 없어서 안 나오는 건가.....");
        for (int i =0; i<dto.areas.size(); i++){
            System.out.println("Dto에서 값이 잘 들어가는지 areas 확인 : "
                    + dto.areas.get(i).getArea().toString());
        }
        projectDto.setAreas(dto.areas);
        projectDto.setJobs(dto.getJobs());


        return projectDto;
    }


}


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
