package com.course.coursemanagementsystem.service;

import com.course.coursemanagementsystem.dto.LoginRequest;
import com.course.coursemanagementsystem.dto.RegisterRequest;
import com.course.coursemanagementsystem.entity.Role;
import com.course.coursemanagementsystem.entity.User;
import com.course.coursemanagementsystem.repository.UserRepository;
import com.course.coursemanagementsystem.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public String register(RegisterRequest request) {

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());

        user.setPassword(passwordEncoder.encode(request.getPassword()));

        user.setRole(Role.STUDENT);

        userRepository.save(user);

        return "User Registered Successfully";
    }

    public String login(LoginRequest request) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("User Not Found"));

        boolean isPasswordCorrect =
                passwordEncoder.matches(
                        request.getPassword(),
                        user.getPassword()
                );

        if (!isPasswordCorrect) {
            throw new RuntimeException("Invalid Password");
        }

        return jwtUtil.generateToken(user);
    }
}