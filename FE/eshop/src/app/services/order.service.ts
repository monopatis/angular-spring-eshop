import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order-model';
import { NewOrder } from '../models/new-order-model';
import { ProductInfo } from '../models/product-info-model';
import { Customer } from '../models/customer-model';
import { Product } from '../models/product-model';

import { OrderItems } from '../models/orderItems-model';

import { Observable } from 'rxjs';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  formData: Order;
  newOrderData: NewOrder;
  productsArray: ProductInfo;

  readonly APIUrl = 'http://localhost:8080/';


  getOrdList(): Observable<Order[]> {
    return this.http.get<Order[]>(this.APIUrl + 'order/all');
  }

  getOrderItems(id: number): Observable<OrderItems[]> {
    return this.http.get<OrderItems[]>(this.APIUrl + 'order/id/' + id);
  }

  getCustDropDownValues(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.APIUrl + 'customer/all');
  }

  getProdList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.APIUrl + 'product/all');
  }

  addOrder(newOrder: NewOrder) {
    // let options = new RequestOptions({headers: headers});
    const options = { headers: { 'Content-Type': 'application/json' } };
    let url = this.APIUrl + 'order/' + newOrder.customerId + '/new';
    return this.http.post<Order>(url, '['+JSON.stringify(newOrder)+']', options);
    // return this.http.post<Order[]>(this.APIUrl + 'order/' + newOrder.customerId + '/new', newOrder);
  }

  private _listners = new Subject<any>();
  listen(): Observable<any> {
    return this._listners.asObservable();
  }
  filter(filterBy: string) {
    this._listners.next(filterBy);
  }

}
