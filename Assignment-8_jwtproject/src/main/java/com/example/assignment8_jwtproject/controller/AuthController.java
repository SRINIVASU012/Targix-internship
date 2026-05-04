package com.example.assignment8_jwtproject.controller;

import com.example.assignment8_jwtproject.entity.User;
import com.example.assignment8_jwtproject.config.JwtUtil;
import com.example.assignment8_jwtproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService service;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword())); // 
        return service.saveUser(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User dbUser = service.findByUsername(user.getUsername());

        if (dbUser != null &&
                passwordEncoder.matches(user.getPassword(), dbUser.getPassword())) {

            return jwtUtil.generateToken(user.getUsername()); //
        }

        throw new RuntimeException("Invalid Credentials ");
    }
}