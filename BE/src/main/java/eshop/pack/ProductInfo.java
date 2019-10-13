package eshop.pack;

public class ProductInfo {
    public Long productId;
    public Long orderItemQuantity;

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getOrderItemQuantity() {
        return orderItemQuantity;
    }

    public void setOrderItemQuantity(Long orderItemQuantity) {
        this.orderItemQuantity = orderItemQuantity;
    }
}