import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { Customer } from '../shared/models/customer';
import { CustomerListComponent } from './customer-list/customer-list.component';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})

export class CustomersComponent implements OnInit {
  title: string = '';
  people: Customer[] = [];
  isLoading = false;
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.title = 'Customers';
    this.isLoading = true;
    this.dataService.getCustomers().subscribe((customers: Customer[]) => {
      this.people = customers;
      this.isLoading = false;
    }, (err: Error) => this.isLoading = false)
   }

}
