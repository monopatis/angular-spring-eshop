package eshop.pack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NewProductController {
    @Autowired
    private ProductService productService;
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(path="/product/new", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Product answer(@RequestParam("name") String name,
                          @RequestParam("price") Float price,
                          @RequestParam(value = "description", required = false) String description,
                          @RequestParam("itemsLeft") Long itemsLeft) {
        return productService.newProduct(name, price, description, itemsLeft);
    }
}
