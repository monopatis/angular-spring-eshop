import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  
  configUrl = 'http://localhost:8080/customer/';

  getCustomers() {
    return this.http.get(this.configUrl+'all');
  }
}
