package com.example.assignment10connectingreact.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="items")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Item{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="item_name")
    private String itemName;
    private Double price;
    private String type;
}