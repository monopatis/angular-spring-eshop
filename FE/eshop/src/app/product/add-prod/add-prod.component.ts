import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ProductService } from '../../services/product.service';
import { NgForm } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-prod',
  templateUrl: './add-prod.component.html',
  styleUrls: ['./add-prod.component.css']
})
export class AddProdComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<AddProdComponent>,
    private service: ProductService,
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
      name: '',
      price: null,
      description: '',
      itemsLeft: null
    }
  }

  onClose() {
    this.dialogbox.close();
    this.service.filter('Register click');
  }

  onSubmit(form: NgForm) {

    this.service.addProduct(form.value).subscribe(res => {
      this.onClose();
      // this.resetForm(form);
      // this.snackBar.open(res.firstName, '', {
      //   duration: 5000,
      //   verticalPosition: 'top'
      // });
    }
    )
  }

}

