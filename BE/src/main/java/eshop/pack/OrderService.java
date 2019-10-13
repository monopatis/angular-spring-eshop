package eshop.pack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private OrderItemsRepository orderItemsRepository;

    @Autowired
    private  ProductRepository productRepository;

    @Transactional
    public Order newOrder(Long customerId, List<ProductInfo> productInfoList){
        Timestamp date_order_placed = new Timestamp(System.currentTimeMillis());
        Optional<Customer> customer = customerRepository.findById(customerId);
        Order order = new Order();
        order.setDate_order_placed(date_order_placed);
        order.setCustomer(customer.get());
        order = orderRepository.save(order);
        for (int i = 0; i < productInfoList.size(); i++ ){
            OrderItems orderItems = new OrderItems();
            orderItems.setOrder(order);
            Optional<Product> product = productRepository.findById(productInfoList.get(i).getProductId());
            orderItems.setProduct(product.get());
            Long quantity = productInfoList.get(i).getOrderItemQuantity();
            orderItems.setOrderItemQuantity(quantity);
            product.get().setItemsLeft(product.get().getItemsLeft()-quantity);
            productRepository.save(product.get());
            orderItems = orderItemsRepository.save(orderItems);
        }
        return order;
    }
}
