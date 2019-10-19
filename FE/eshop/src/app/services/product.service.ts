import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../models/product-model';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  formData: Product;
  
  readonly APIUrl = 'http://localhost:8080/product/';


  getProdList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.APIUrl+'all');
  }
  
  addProduct(dep: Product){
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
