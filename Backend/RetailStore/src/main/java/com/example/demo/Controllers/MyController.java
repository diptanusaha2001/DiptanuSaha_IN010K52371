package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Models.Product;
import com.example.demo.Services.CrudService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MyController {

    @Autowired
    private CrudService service;

    @GetMapping("/getProd")
    public List<Product> fetchProductList() { 
        return service.fetchProductList();
    }

    @GetMapping("/getProd/{id}")
    public Product fetchProductListById(@PathVariable Long id) { 
        return service.fetchProductListById(id).orElse(null);
    }

    @PostMapping("/addProd")
    public Product saveProductList(@RequestBody Product product) { 
        return service.saveProductToBD(product);
    }

    @PutMapping("/updateProd")
    public String saveOrUpdateProductList(@RequestBody Product product) { 
        return service.updateProduct(product);  // Returns the update message
    }

    @DeleteMapping("/deleteProd/{id}")
    public String deleteProductListById(@PathVariable Long id) { 
        return service.deleteProductListById(id);
    }
}
