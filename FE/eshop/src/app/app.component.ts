import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Eshop';
  customer: Customer[] = [];

  constructor(private api: CustomerService) { }

  ngOnInit() {
    this.getAllCustomers();
  }
  // getAllCustomers() {
  //   this.api.getCustomers()
  //     .subscribe(data => {
  //       console.log(data);
  //       for (const d of (data as any)) {
  //         this.customer.push({
  //           id: d.id,
  //           fistName: d.fistName,
  //           lastName: d.lastName,
  //           email: d.email
  //         });
  //       }
  //       console.log(this.customer);
  //     });
  // }

  getAllCustomers() {
    console.log('data:');
    this.api.getCustomers()
      .subscribe(data => {
        console.log(data);
      });
  }
}
