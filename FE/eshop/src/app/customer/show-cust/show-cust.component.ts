import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort } from '@angular/material';
import { Customer } from '../../models/customer-model';
import { CustomerService } from '../../services/customer.service';

import { MatDialog, MatDialogConfig } from '@angular/material';
import {AddCustComponent} from '../add-cust/add-cust.component'


import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-show-cust',
  templateUrl: './show-cust.component.html',
  styleUrls: ['./show-cust.component.css']
})
export class ShowCustComponent implements OnInit {

  constructor(private service: CustomerService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.service.listen().subscribe((m: any) => {
      console.log(m);
      this.refreshEmpList();
    })
  }


  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['Options', 'CustomerID', 'FirstName', 'LastName', 'Email']

  @ViewChild(MatSort, null) sort: MatSort;

  ngOnInit() {

    this.refreshEmpList();
  }


  applyFilter(filtervalue: string) {
    this.listData.filter = filtervalue.trim().toLocaleLowerCase();
  }

  refreshEmpList() {
    this.service.getCustList().subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
    });
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(AddCustComponent, dialogConfig);
  }
}
