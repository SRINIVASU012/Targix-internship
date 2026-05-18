package com.example.assignment10connectingreact.controller;



import com.example.assignment10connectingreact.entity.Item;
import com.example.assignment10connectingreact.service.ItemService;

import org.springframework.web.bind.annotation.*;

        import java.util.List;

@RestController
@RequestMapping("/api/items")
@CrossOrigin(origins = "http://localhost:5173")
public class ItemController {

    private final ItemService service;

    public ItemController(ItemService service) {
        this.service = service;
    }

    // GET ALL
    @GetMapping
    public List<Item> getItems() {
        return service.getAllItems();
    }

    // GET BY ID
    @GetMapping("/{id}")
    public Item getItem(@PathVariable Long id) {
        return service.getItemById(id);
    }

    // CREATE
    @PostMapping
    public Item addItem(@RequestBody Item item) {
        return service.saveItem(item);
    }

    // UPDATE
    @PutMapping("/{id}")
    public Item updateItem(
            @PathVariable Long id,
            @RequestBody Item item) {

        return service.updateItem(id, item);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public String deleteItem(@PathVariable Long id) {

        service.deleteItem(id);

        return "Item Deleted Successfully";
    }
}