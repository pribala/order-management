import { Component, OnInit } from '@angular/core';
import { Customer } from '../../shared/models/customer';
import { CustomerListComponent } from '../customer-list/customer-list.component';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})

export class CustomersComponent implements OnInit {
  title: string = '';
  people: Customer[] = [];
  constructor() {

  }

  ngOnInit() {
    this.title = 'Customers';
    this.people = [
      {id: 1, name: 'john Doe', city: 'NYC', orderTotal: 19.9},
      {id: 2, name: 'james cordon', city: 'Newark', orderTotal: 15.7},
      {id: 3, name: 'Billy Bob', city: 'NYC', orderTotal: 20.02}];
  }
}
