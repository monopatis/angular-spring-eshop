import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CustomerService } from '../../services/customer.service';
import { NgForm } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-cust',
  templateUrl: './add-cust.component.html',
  styleUrls: ['./add-cust.component.css']
})
export class AddCustComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<AddCustComponent>,
    private service: CustomerService,
    private snackBar: MatSnackBar) { }

  public listItems: Array<string> = [];

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.service.formData = {
      id: null,
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  onClose() {
    this.dialogbox.close();
    this.service.filter('Register click');
  }

  onSubmit(form: NgForm) {

    this.service.addCustomer(form.value).subscribe(res => {
      this.onClose();
    }
    )
  }

}

