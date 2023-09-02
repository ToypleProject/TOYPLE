package com.project.toyple.review;

import com.project.toyple.user.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewDao extends JpaRepository<ReviewDto, Integer> {
    List<ReviewDto> findBySender(UserDto userDto);
    List<ReviewDto> findByReceiver(UserDto userDto);
}
