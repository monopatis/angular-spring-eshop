
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { MatTableDataSource, MatSort } from '@angular/material';
import { OrderItems } from '../../models/orderItems-model';
import { OrderService } from '../../services/order.service';

import { MatDialog, MatDialogConfig } from '@angular/material';


import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-shor-ord-items',
  templateUrl: './shor-ord-items.component.html',
  styleUrls: ['./shor-ord-items.component.css']
})
export class ShorOrdItemsComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<ShorOrdItemsComponent>,
    private service: OrderService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.service.listen().subscribe((m: any) => {
      console.log(m);
      this.refreshEmpList();
    })
  }


  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['OrderItemsID', 'OrderID', 'ProductID', 'ProductName', 'ProductPrice']

  @ViewChild(MatSort, null) sort: MatSort;

  ngOnInit() {

    this.refreshEmpList();
  }


  // refreshEmpList() {
  //   this.service.getOrderItems(id:number).subscribe(data => {
  //     this.service.formData = id;
  //     this.listData = new MatTableDataSource(data);
  //     this.listData.sort = this.sort;
  //   });
  // }
  refreshEmpList() {
    this.service.getOrderItems(this.service.formData.id).subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
    });
  }

  onClose() {
    this.dialogbox.close();
    this.service.filter('Register click');
  }


}
