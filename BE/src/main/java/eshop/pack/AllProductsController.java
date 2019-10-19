package eshop.pack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AllProductsController {
    @Autowired
    private ProductRepository productRepository;
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path="/product/all",produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<Product> findAll() {
        return productRepository.findAll();
    }
}
