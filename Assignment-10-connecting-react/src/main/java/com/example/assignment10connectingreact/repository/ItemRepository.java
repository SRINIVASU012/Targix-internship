package com.example.assignment10connectingreact.repository;


import com.example.assignment10connectingreact.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository
        extends JpaRepository<Item, Long> {
}