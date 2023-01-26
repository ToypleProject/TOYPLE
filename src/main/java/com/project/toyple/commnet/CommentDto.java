package com.project.toyple.commnet;

import com.project.toyple.project.ProjectDto;
import com.project.toyple.user.UserDto;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="commnet")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CommentDto {
    @Id
    @GeneratedValue //생성된 값 사용
    private String comment_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserDto user_id;
    @ManyToOne
    @JoinColumn(name = "project_id")
    private ProjectDto project_id;
    private String comment;
}
