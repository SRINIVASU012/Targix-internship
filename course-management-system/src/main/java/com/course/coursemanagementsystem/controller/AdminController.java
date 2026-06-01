package com.course.coursemanagementsystem.controller;

import com.course.coursemanagementsystem.dto.CourseStatsDto;
import com.course.coursemanagementsystem.dto.DashboardResponse;
import com.course.coursemanagementsystem.dto.PasswordRequest;
import com.course.coursemanagementsystem.entity.Role;
import com.course.coursemanagementsystem.entity.User;
import com.course.coursemanagementsystem.repository.CourseRepository;
import com.course.coursemanagementsystem.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CourseRepository courseRepository;
    @GetMapping("/students")
    public List<User> getAllStudents() {
        return userRepository.findAll()
                .stream()
                .filter(user -> user.getRole() == Role.STUDENT)
                .toList();
    }

    @DeleteMapping("/students/{id}")
    public String deleteStudent(@PathVariable Long id) {
        userRepository.deleteById(id);
        return "Student Deleted Successfully";
    }
    @PutMapping("/students/{id}/password")
    public String updatePassword(
            @PathVariable Long id,
            @RequestBody PasswordRequest request) {

        User user = userRepository.findById(id)
                .orElseThrow();

        user.setPassword(
                passwordEncoder.encode(request.getPassword())
        );

        userRepository.save(user);

        return "Password Updated Successfully";
    }
    @GetMapping("/dashboard")
    public DashboardResponse getDashboard() {

        long totalStudents = userRepository.findAll()
                .stream()
                .filter(user -> user.getRole() == Role.STUDENT)
                .count();

        long totalCourses = courseRepository.count();

        return new DashboardResponse(
                totalStudents,
                totalCourses
        );
    }
    @GetMapping("/course-stats")
    public List<CourseStatsDto> getCourseStats() {

        return courseRepository.findAll()
                .stream()
                .map(course ->
                        new CourseStatsDto(
                                course.getId(),
                                course.getTitle(),
                                course.getStudents().size()
                        )
                )
                .toList();
    }
}