package eshop.pack;

import javax.persistence.*;

@Entity
@Table(name = "order_items")
public class OrderItems {
    @Id
    @Column(name = "order_item_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "order_item_quantity")
    private Long orderItemQuantity;

    @ManyToOne(optional = false)
    @JoinColumn(name = "order_id",nullable = false)
    private Order order;

    @OneToOne(optional = false)
    @JoinColumn(name = "product_id",nullable = false)
    private Product product;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getOrderItemQuantity() {
        return orderItemQuantity;
    }

    public void setOrderItemQuantity(Long orderItemQuantity) {
        this.orderItemQuantity = orderItemQuantity;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
