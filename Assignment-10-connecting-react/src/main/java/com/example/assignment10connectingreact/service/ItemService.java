package com.example.assignment10connectingreact.service;



import com.example.assignment10connectingreact.entity.Item;
import com.example.assignment10connectingreact.repository.ItemRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    private final ItemRepository repository;

    public ItemService(ItemRepository repository) {
        this.repository = repository;
    }

    // GET ALL
    public List<Item> getAllItems() {
        return repository.findAll();
    }

    // GET BY ID
    public Item getItemById(Long id) {
        return repository.findById(id).orElse(null);
    }

    // CREATE
    public Item saveItem(Item item) {
        return repository.save(item);
    }

    // UPDATE
    public Item updateItem(Long id, Item item) {

        Item existing = repository.findById(id).orElse(null);

        if(existing != null) {
            existing.setItemName(item.getItemName());
            existing.setPrice(item.getPrice());
            existing.setType(item.getType());

            return repository.save(existing);
        }

        return null;
    }

    // DELETE
    public void deleteItem(Long id) {
        repository.deleteById(id);
    }
}