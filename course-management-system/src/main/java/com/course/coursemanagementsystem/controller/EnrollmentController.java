package com.course.coursemanagementsystem.controller;
import com.course.coursemanagementsystem.dto.UpdateProfileRequest;
import com.course.coursemanagementsystem.entity.Course;
import com.course.coursemanagementsystem.entity.User;
import com.course.coursemanagementsystem.service.EnrollmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/student")
@RequiredArgsConstructor
public class EnrollmentController {

    private final EnrollmentService enrollmentService;

    @PostMapping("/enroll/{courseId}")
    public ResponseEntity<String> enroll(
            @PathVariable Long courseId
    ) {
        try {
            enrollmentService.enroll(courseId);
            return ResponseEntity.ok(
                    "Enrollment Successful"
            );

        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(e.getMessage());
        }
    }

    @DeleteMapping("/cancel/{courseId}")
    public String cancelEnrollment(@PathVariable Long courseId) {
        enrollmentService.cancelEnrollment(courseId);
        return "Enrollment Cancelled";
    }

    @GetMapping("/my-courses")
    public Set<Course> myCourses() {
        return enrollmentService.getMyCourses();
    }
    @GetMapping("/profile")
    public User getProfile() {
        return enrollmentService.getProfile();
    }
    @PutMapping("/profile")
    public String updateProfile(
            @RequestBody UpdateProfileRequest request
    ) {
        enrollmentService.updateProfile(request);
        return "Profile Updated Successfully";
    }
}