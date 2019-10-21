import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort } from '@angular/material';
import { Order } from '../../models/order-model';
import { OrderService } from '../../services/order.service';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddOrdComponent } from '../add-ord/add-ord.component'

import { ShorOrdItemsComponent } from '../shor-ord-items/shor-ord-items.component'


import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-show-ord',
  templateUrl: './show-ord.component.html',
  styleUrls: ['./show-ord.component.css']
})
export class ShowOrdComponent implements OnInit {


  constructor(private service: OrderService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.service.listen().subscribe((m: any) => {
      console.log(m);
      this.refreshEmpList();
    })
  }


  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['Options', 'OrderID', 'CustomerID', 'CustomerFirstName', 'CustomerLastName', 'CustomerEmail', 'Date', 'Details']

  @ViewChild(MatSort, null) sort: MatSort;

  ngOnInit() {

    this.refreshEmpList();
  }


  applyFilter(filtervalue: string) {
    this.listData.filter = filtervalue.trim().toLocaleLowerCase();
  }

  refreshEmpList() {
    this.service.getOrdList().subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
    });
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "90%";
    this.dialog.open(AddOrdComponent, dialogConfig);
  }

  onDetails(ord: Order) {
    this.service.formData = ord;
    // this.serviceOrderItem.orderId = id;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(ShorOrdItemsComponent, dialogConfig);

  }
}
