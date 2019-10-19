package eshop.pack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
public class NewProductController {
    @Autowired
    private ProductRepository productRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(path="/product/new", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Product newProduct (@RequestBody Product newProduct) {
        return productRepository.save(newProduct);
    }
}
