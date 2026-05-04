package com.example.assignment8_jwtproject.controller;



import org.springframework.web.bind.annotation.*;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Spring Boot JWT Project Running ";
    }

    @GetMapping("/test")
    public String test() {
        return "API is working ";
    }
}