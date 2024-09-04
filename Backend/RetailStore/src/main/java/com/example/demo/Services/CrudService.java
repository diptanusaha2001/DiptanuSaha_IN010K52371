package com.example.demo.Services;

import com.example.demo.Models.Product;
import com.example.demo.Repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CrudService {

    @Autowired
    private ProductRepo productRepo;

    public List<Product> fetchProductList() {
        return productRepo.findAll();
    }

    public Optional<Product> fetchProductListById(Long id) {
        return productRepo.findById(id);
    }

    public Product saveProductToBD(Product product) {
        return productRepo.save(product);
    }

    public String deleteProductListById(Long id) {
        if (productRepo.existsById(id)) {
            productRepo.deleteById(id);
            return "Product deleted successfully!";
        } else {
            return "Product not found!";
        }
    }

    public String updateProduct(Product updatedProduct) {
        Optional<Product> existingProductOpt = productRepo.findById(updatedProduct.getId());
        if (existingProductOpt.isPresent()) {
            Product existingProduct = existingProductOpt.get();
            existingProduct.setName(updatedProduct.getName());
            existingProduct.setCategory(updatedProduct.getCategory());
            existingProduct.setPrice(updatedProduct.getPrice());
            existingProduct.setQuantity(updatedProduct.getQuantity());
            productRepo.save(existingProduct);
            return "Product updated successfully!";
        } else {
            return "Product not found!";
        }
    }
}
