package com.project.toyple.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<UserDto, String> {
    UserDto findByUserId(String userId);
}
