package com.example.assignment8_jwtproject.controller;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello Secure API";
    }
}