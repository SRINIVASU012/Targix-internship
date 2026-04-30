package com.example.assignment7taskmanager.service;


import com.example.assignment7taskmanager.model.Task;
import com.example.assignment7taskmanager.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository repo;

    public List<Task> getAllTasks() {
        return repo.findAll();
    }

    public Task getTaskById(int id) {
        return repo.findById(id).orElse(null);
    }

    public Task saveTask(Task task) {
        return repo.save(task);
    }

    public void deleteTask(int id) {
        repo.deleteById(id);
    }
}