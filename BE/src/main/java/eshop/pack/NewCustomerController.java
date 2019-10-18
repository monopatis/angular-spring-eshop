package eshop.pack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
public class NewCustomerController {
    @Autowired
    private CustomerRepository customerRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(path="/customer/new", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Customer newCustomer (@RequestBody Customer newCustomer) {
        return customerRepository.save(newCustomer);
    }
}
