package com.project.toyple.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
@Getter
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
