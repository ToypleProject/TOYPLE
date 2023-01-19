package com.project.toyple.user;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    @Id
    private String userId;

    private String password;

    private String userName;

    private String email;

    private String intro;

    private String image;

}
