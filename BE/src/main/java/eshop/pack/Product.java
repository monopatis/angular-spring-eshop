package eshop.pack;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @Column(name = "product_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private  String name;

    @Column(name = "price", nullable = false)
    private  Float price;

    @Column(name = "description", nullable = true)
    private  String description;

    @Column(name = "items_left")
    private Long itemsLeft;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getItemsLeft() {
        return itemsLeft;
    }

    public void setItemsLeft(Long itemsLeft) {
        this.itemsLeft = itemsLeft;
    }
}
