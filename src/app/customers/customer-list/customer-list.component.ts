import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../../shared/models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  _customers: Customer[] = [];
  @Input() get customers() {
    return this._customers;
  }
  set customers(value) {
    this.filteredCustomers = this._customers = value;
    this.calculateTotal();
  }
  filteredCustomers: Customer[] = [];
  customersOrderTotal: number = 0;
  currencyCode: string = 'USD';
  displayedColumns: string[] = ['name', 'city', 'orderTotal'];
  orderTotals = 0;
  constructor() { }

  ngOnInit(): void {

  }

  calculateTotal() {
    this.orderTotals = 0;
    this.filteredCustomers.forEach((cust: Customer) => {
     this.orderTotals = this.orderTotals + (cust.orderTotal ? cust.orderTotal : 0);

    });
  }

  sort(prop: string) {
    console.log(prop);
  }



}
