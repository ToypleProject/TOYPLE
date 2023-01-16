package com.project.toyple.commnet;

import com.project.toyple.project.ProjectDto;
import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@Entity
@Table(name="comment")
public class CommentDto {
    @Id
    @GeneratedValue //생성된 값 사용
    private String comment_id;

    //@ManyToOne
    //@JoinColumn(name = "user_id")
    //private User user_id;
    @ManyToOne
    @JoinColumn(name = "project_id")
    private ProjectDto project_id;
    private String comment;
}
