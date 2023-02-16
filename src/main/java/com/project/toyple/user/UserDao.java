package com.project.toyple.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserDao extends JpaRepository<UserDto, String> {
    UserDto findByUserId(String userId);
//    Optional<UserDto> findByUserId(String userId);
    UserDto findByEmail(String email);
    boolean existsByUserId(String userId);
    boolean existsByEmail(String email);
}
