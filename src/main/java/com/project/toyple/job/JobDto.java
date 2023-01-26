package com.project.toyple.job;

import com.project.toyple.project.ProjectDto;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="job")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class JobDto {

    @Id
    @Column(name="seq")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int seq;
    @ManyToOne(fetch = FetchType.LAZY)//: fetch로 로딩 전략을 설정 FetchType. LAZY는 지연 로딩을 의미
    @JoinColumn(name = "project_id")
    private ProjectDto project_id;
    private String job;
}
