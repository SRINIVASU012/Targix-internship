package com.example.assignment7taskmanager.repository;

import com.example.assignment7taskmanager.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Integer> {
}