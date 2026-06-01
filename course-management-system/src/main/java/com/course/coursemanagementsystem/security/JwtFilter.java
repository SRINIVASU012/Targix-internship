package com.course.coursemanagementsystem.security;


import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

@Component
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {

        String authHeader = request.getHeader("Authorization");
        String token = null;
        String email = null;

        try {
            if (authHeader != null && authHeader.startsWith("Bearer ")) {
                token = authHeader.substring(7);
                email = jwtUtil.extractEmail(token);
                System.out.println("JWT Filter - Extracted Email: " + email);
            }

            if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                // 1. Extract the role from the token dynamically
                String role = jwtUtil.extractRole(token);
                System.out.println("JWT Filter - Extracted Raw Role: " + role);

                if (role != null) {
                    // 2. Format the role with the mandatory "ROLE_" prefix for Spring Security matching
                    String formattedRole = role.startsWith("ROLE_") ? role : "ROLE_" + role;
                    System.out.println("JWT Filter - Assigned Authority: " + formattedRole);

                    UsernamePasswordAuthenticationToken authentication =
                            new UsernamePasswordAuthenticationToken(
                                    email,
                                    null,
                                    List.of(new SimpleGrantedAuthority(formattedRole))
                            );

                    authentication.setDetails(
                            new WebAuthenticationDetailsSource().buildDetails(request)
                    );

                    SecurityContextHolder.getContext().setAuthentication(authentication);
                } else {
                    System.out.println("JWT Filter - Warning: Role claim was null in token!");
                }
            }
        } catch (Exception e) {
            // Catches expired or invalid tokens gracefully instead of breaking the filter chain
            System.out.println("JWT Filter - Exception caught: " + e.getMessage());
        }

        filterChain.doFilter(request, response);
    }
}