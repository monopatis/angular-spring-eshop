import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Order} from '../models/order-model';
import {OrderItems} from '../models/orderItems-model';

import {Observable} from 'rxjs';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  formData: Order;
  
  readonly APIUrl = 'http://localhost:8080/order/';


  getOrdList(): Observable<Order[]> {
    return this.http.get<Order[]>(this.APIUrl+'all');
  }

  getOrderItems(id: number): Observable<OrderItems[]> {
    return this.http.get<OrderItems[]>(this.APIUrl+'id/'+id);
  }
  
  // addOrder(dep: Order){
  //   return this.http.post(this.APIUrl+'new', dep)
  // }

  private _listners = new Subject<any>();
  listen(): Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy: string){
    this._listners.next(filterBy);
  }

}
