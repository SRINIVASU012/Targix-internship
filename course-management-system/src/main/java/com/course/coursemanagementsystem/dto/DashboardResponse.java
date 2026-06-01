package com.course.coursemanagementsystem.dto;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class DashboardResponse {

    private long totalStudents;
    private long totalCourses;
}