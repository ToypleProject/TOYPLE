package com.project.toyple.applicant;

import com.project.toyple.project.ProjectDto;
import com.project.toyple.user.UserDto;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="applicant")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ApplicantDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int seq;

    @OneToOne  // 1:1인지, 1:N인지 까먹었음
    @JoinColumn(name="user_id")
    private UserDto userId;  // user 테이블 FK

    @ManyToOne
    @JoinColumn(name="project_id")
    private ProjectDto projectId;  // project 테이블 FK

    private String status;
}
