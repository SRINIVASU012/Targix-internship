package com.course.coursemanagementsystem.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CourseStatsDto {

    private Long courseId;
    private String courseTitle;
    private int studentCount;
}