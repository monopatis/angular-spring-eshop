package eshop.pack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
public class NewOrderController {
    @Autowired
    private OrderService orderService;
//    RestTemplate restTemplate = new RestTemplate();
//    List<ProductInfo> productInfoList = new ArrayList<>();
    @PostMapping(path="/order/{customerId}/new", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Order answer(@PathVariable Long customerId,
                        @RequestBody List<ProductInfo> productInfoList){
//        for (int i = 0; i < productInfoList.size(); i++ ){
//            System.out.print(productInfoList.get(i).getProductId() + " ");
//            System.out.println(productInfoList.get(i).getOrderItemQuantity() );
//        }
        return orderService.newOrder(customerId, productInfoList);
    }
}
