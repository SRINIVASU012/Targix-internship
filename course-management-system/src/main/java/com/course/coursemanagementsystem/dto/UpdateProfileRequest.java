package com.course.coursemanagementsystem.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateProfileRequest {

    private String name;
    private String password;
}