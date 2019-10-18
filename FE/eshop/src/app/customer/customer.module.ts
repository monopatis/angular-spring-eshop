import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { ShowCustComponent } from './show-cust/show-cust.component';
import { AddCustComponent } from './add-cust/add-cust.component';
import { EditCustComponent } from './edit-cust/edit-cust.component';

@NgModule({
  declarations: [CustomerComponent, ShowCustComponent, AddCustComponent, EditCustComponent],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
