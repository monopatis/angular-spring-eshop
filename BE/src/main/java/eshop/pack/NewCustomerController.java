import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NewCustomerController {
    @Autowired
    private CustomerService customerService;

    @PostMapping(path="/customer/new", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Customer answer(@RequestParam("fistName") String fistName,
                           @RequestParam("lastName") String lastName,
                           @RequestParam("email") String email) {
        return customerService.newCustomer(fistName, lastName, email);
    }
}
