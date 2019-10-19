import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort } from '@angular/material';
import { Product } from '../../models/product-model';
import { ProductService } from '../../services/product.service';

import { MatDialog, MatDialogConfig } from '@angular/material';
import {AddProdComponent} from '../add-prod/add-prod.component'


import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-show-prod',
  templateUrl: './show-prod.component.html',
  styleUrls: ['./show-prod.component.css']
})
export class ShowProdComponent implements OnInit {

  constructor(private service: ProductService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.service.listen().subscribe((m: any) => {
      console.log(m);
      this.refreshEmpList();
    })
  }


  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['Options', 'ProductID', 'Name', 'Price', 'Description', 'ItemsLeft']

  @ViewChild(MatSort, null) sort: MatSort;

  ngOnInit() {

    this.refreshEmpList();
  }


  applyFilter(filtervalue: string) {
    this.listData.filter = filtervalue.trim().toLocaleLowerCase();
  }

  refreshEmpList() {
    this.service.getProdList().subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
    });
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(AddProdComponent, dialogConfig);
  }
}
