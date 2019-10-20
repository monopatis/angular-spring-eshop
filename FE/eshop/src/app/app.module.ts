import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import {MatTableModule, MatIconModule, MatButtonModule} from '@angular/material';
import {MatSortModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';


import { ShowCustComponent } from './customer/show-cust/show-cust.component';
import { EditCustComponent } from './customer/edit-cust/edit-cust.component';
import { AddCustComponent } from './customer/add-cust/add-cust.component';
import { ShowProdComponent } from './product/show-prod/show-prod.component';
import { EditProdComponent } from './product/edit-prod/edit-prod.component';
import { AddProdComponent } from './product/add-prod/add-prod.component';
import { ShowOrdComponent } from './order/show-ord/show-ord.component';
import { EditOrdComponent } from './order/edit-ord/edit-ord.component';
import { AddOrdComponent } from './order/add-ord/add-ord.component';

import {CustomerService} from './services/customer.service';
import {ProductService} from './services/product.service';
import {OrderService} from './services/order.service';
import { ShorOrdItemsComponent } from './order/shor-ord-items/shor-ord-items.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProductComponent,
    OrderComponent,
    ShowCustComponent,
    EditCustComponent,
    AddCustComponent,
    ShowProdComponent,
    EditProdComponent,
    AddProdComponent,
    ShowOrdComponent,
    EditOrdComponent,
    AddOrdComponent,
    ShorOrdItemsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,MatTableModule, MatIconModule, MatButtonModule
    ,HttpClientModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [CustomerService, ProductService, OrderService],
  bootstrap: [AppComponent],
  entryComponents:[    
    ShowCustComponent,
    EditCustComponent,
    AddCustComponent,
    EditProdComponent,
    AddProdComponent,
    EditOrdComponent,
    AddOrdComponent,
    ShorOrdItemsComponent
  ]
})
export class AppModule { }
