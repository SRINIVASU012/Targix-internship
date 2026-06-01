package com.course.coursemanagementsystem.service;


import com.course.coursemanagementsystem.dto.UpdateProfileRequest;
import com.course.coursemanagementsystem.entity.Course;
import com.course.coursemanagementsystem.entity.User;
import com.course.coursemanagementsystem.repository.CourseRepository;
import com.course.coursemanagementsystem.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@RequiredArgsConstructor
public class EnrollmentService {

    private final UserRepository userRepository;
    private final CourseRepository courseRepository;
    private final PasswordEncoder passwordEncoder;

    public void enroll(Long courseId) {

        String email =
                SecurityContextHolder.getContext()
                        .getAuthentication()
                        .getName();

        User user =
                userRepository.findByEmail(email)
                        .orElseThrow();

        Course course =
                courseRepository.findById(courseId)
                        .orElseThrow();
        if (user.getEnrolledCourses().size() >= 3) {
            throw new RuntimeException(
                    "You can enroll in maximum 3 courses only"
            );
        }
        user.getEnrolledCourses().add(course);

        userRepository.save(user);
    }

    public Set<Course> getMyCourses() {

        String email =
                SecurityContextHolder.getContext()
                        .getAuthentication()
                        .getName();

        User user =
                userRepository.findByEmail(email)
                        .orElseThrow();

        return user.getEnrolledCourses();
    }

    public void cancelEnrollment(Long courseId) {

        String email =
                SecurityContextHolder.getContext()
                        .getAuthentication()
                        .getName();

        User user =
                userRepository.findByEmail(email)
                        .orElseThrow();

        Course course =
                courseRepository.findById(courseId)
                        .orElseThrow();

        user.getEnrolledCourses().remove(course);

        userRepository.save(user);
    }
    public User getProfile() {

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        return userRepository
                .findByEmail(email)
                .orElseThrow();
    }
    public void updateProfile(UpdateProfileRequest request) {

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        User user = userRepository
                .findByEmail(email)
                .orElseThrow();

        user.setName(request.getName());

        if(request.getPassword() != null &&
                !request.getPassword().isBlank()) {

            user.setPassword(
                    passwordEncoder.encode(
                            request.getPassword()
                    )
            );
        }

        userRepository.save(user);
    }
}