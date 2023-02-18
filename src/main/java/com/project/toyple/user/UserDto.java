package com.project.toyple.user;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

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
public class UserDto implements UserDetails {

    @Id
    private String userId;

    private String password;

    private String userName;

    private String email;

    private String intro;

    private String image;

    private int authStatus;

    private String authKey;

    public UserDto(UserDto userDto) {
        this.userId = userDto.userId;
        this.password = userDto.password;
        this.userName = userDto.userName;
        this.email = userDto.email;
        this.intro = userDto.intro;
        this.image = userDto.image;
        this.authStatus = userDto.authStatus;
        this.authKey = userDto.authKey;
    }

    public String getUserName() {  // UserDetails의 getUsername()과 겹쳐서 직접 구현해 줌.
        return userName;
    }

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
