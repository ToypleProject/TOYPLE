package com.project.toyple.review;

import com.project.toyple.project.ProjectDto;
import com.project.toyple.user.UserDto;
import com.project.toyple.project.ProjectDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="review")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int seq;

    @ManyToOne
    @JoinColumn(name="sender_id")
    private UserDto sender;  // user 테이블 FK

    @ManyToOne
    @JoinColumn(name="receiver_id")
    private UserDto receiver;  // user 테이블 FK

    @ManyToOne
    @JoinColumn(name="project_id")
    private ProjectDto projectId;  // project 테이블 FK

    private String content;

    private double starWork;

    private double starCommu;

    private double starDilligent;

}
