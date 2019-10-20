import { Product } from './product-model';
import { Customer } from './customer-model';
import { Order } from './order-model';

export class OrderItems{
    id : number;
    orderItemQuantity: number;
    order : Order;
    product : Product;
}