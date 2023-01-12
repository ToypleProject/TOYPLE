package com.project.toyple.notice;

import com.project.toyple.user.UserDto;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="notice")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NoticeDto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int seq;

    @ManyToOne
    @JoinColumn(name="sender_id")
    private UserDto sender;  // user의 FK

    @ManyToOne
    @JoinColumn(name="receiver_id")
    private UserDto receiver;  // user의 FK

    private String content;

    private String regDate;
}
