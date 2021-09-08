import { Component, Input, OnInit } from '@angular/core';
import { SorterService } from '../../core/sorter.service';
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
  constructor(private sortService: SorterService) { }

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
    this.sortService.sort(this.filteredCustomers, prop);
  }

  filter(data: string) {
    if (data) {
      this.filteredCustomers = this.customers.filter((elem: Customer)=> {
        return elem.name.toLowerCase().indexOf(data.toLowerCase()) > - 1 ||
        (elem.city && elem.city.toLowerCase().indexOf(data.toLowerCase()) > -1) ||
        (elem.orderTotal && elem.orderTotal.toString().indexOf(data) > -1)
      });
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculateTotal();

  }

}
