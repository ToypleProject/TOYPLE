package com.project.toyple.user;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Collection;

@Entity
@Table(name="user")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserDto implements UserDetails {  // Serializable(?)

    @Id
    private String userId;

    private String password;

    private String userName;

    private String email;

    private String intro;

    private String image;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {  // lombok @Getter로 구현했으니 안해도 되나?
        return password;
    }

    @Override
    public String getUsername() {  // 주의!! getUserName: 사용자 이름 리턴, getUsername: 사용자 Id 리턴(Spring Security)
        return userId;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
