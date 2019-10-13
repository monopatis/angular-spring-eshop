package eshop.pack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Transactional
    public Product newProduct(String name,Float price, String description, Long itemsLeft){
        Product product = new Product();
        product.setName(name);
        product.setPrice(price);
        product.setDescription(description);
        product.setItemsLeft(itemsLeft);
        product = productRepository.save(product);
        return product;
    }
}
