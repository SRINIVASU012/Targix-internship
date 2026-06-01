package com.course.coursemanagementsystem.repository;

import com.course.coursemanagementsystem.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
}