import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer} from '../models/customer-model';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  formData: Customer;
  
  readonly APIUrl = 'http://localhost:8080/customer/';


  getCustList(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.APIUrl+'all');
  }
  
  addCustomer(dep: Customer){
    return this.http.post(this.APIUrl+'new', dep)
  }

  private _listners = new Subject<any>();
  listen(): Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy: string){
    this._listners.next(filterBy);
  }

}
