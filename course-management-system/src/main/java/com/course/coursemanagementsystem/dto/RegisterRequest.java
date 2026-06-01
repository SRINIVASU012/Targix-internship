package com.course.coursemanagementsystem.dto;

import com.course.coursemanagementsystem.entity.Role;
import lombok.Data;

@Data
public class RegisterRequest {

    private String name;

    private String email;

    private String password;

    private Role role;
}