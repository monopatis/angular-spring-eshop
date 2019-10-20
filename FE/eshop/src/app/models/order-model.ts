// import { Product } from 'product-model';
import { Customer } from './customer-model';

export class Order{
    id : number;
    date_order_placed : Date;
    customer : Customer;
}