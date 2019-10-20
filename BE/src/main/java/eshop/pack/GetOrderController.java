package eshop.pack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GetOrderController {
    @Autowired
    private OrderItemsRepository orderItemsRepository;
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path="/order/id/{id}",produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<OrderItems> findOrder(@PathVariable Long id) {
        return orderItemsRepository.findByOrderId(id);
    }
}
