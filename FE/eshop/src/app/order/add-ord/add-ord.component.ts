import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Order } from '../../models/order-model';
import { NewOrder } from '../../models/new-order-model';
import { OrderService } from '../../services/order.service';

import { NgForm } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-ord',
  templateUrl: './add-ord.component.html',
  styleUrls: ['./add-ord.component.css']
})
export class AddOrdComponent implements OnInit {


  constructor(public dialogbox: MatDialogRef<AddOrdComponent>,
    private service: OrderService,
    private snackBar: MatSnackBar) { }

  public ListItems: Array<any> = [];
  public prodListItems: Array<any> = [];

  ngOnInit() {
    this.resetForm();
    this.dropdownRefresh();
  }

  dropdownRefresh() {
    this.service.getCustDropDownValues().subscribe(data => {
      console.log(data);
      data.forEach(element => {
        this.ListItems.push(element);
      });
    })
    this.service.getProdList().subscribe(data => {
      console.log(data);
      data.forEach(element => {
        this.prodListItems.push(element);
      });
    })

  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.service.newOrderData = {
      customerId: null, 
      productInfo: null
    }
    this.service.newOrderData.productInfo = {
      productId: null,
      orderItemQuantity: null 
    }
  }

  onClose() {
    this.dialogbox.close();
    this.service.filter('Register click');
  }

  onSubmit(form: NgForm) {
    this.service.addOrder(form.value).subscribe(res => 
      {
        this.onClose();
    }
    )
  }

}
