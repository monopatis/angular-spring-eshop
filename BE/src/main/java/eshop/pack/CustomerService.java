import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    @Transactional
    public Customer newCustomer(String firstName, String lastName, String email ){
        Customer customer = new Customer();
        customer.setFistName(firstName);
        customer.setLastName(lastName);
        customer.setEmail(email);
        customer = customerRepository.save(customer);
        return customer;
    }
}
