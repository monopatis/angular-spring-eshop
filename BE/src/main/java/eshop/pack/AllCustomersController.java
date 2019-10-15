package eshop.pack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AllCustomersController {
    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping(path="/customer/all",produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }
}
