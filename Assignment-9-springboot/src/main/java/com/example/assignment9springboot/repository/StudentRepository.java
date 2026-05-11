package com.example.assignment9springboot.repository;



import com.example.assignment9springboot.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}