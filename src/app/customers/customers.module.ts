import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CustomersComponent } from './customers/customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FilterTextboxComponent } from './customer-list/filter-textbox/filter-textbox.component';
@NgModule({
  declarations: [CustomersComponent, CustomerListComponent, FilterTextboxComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CustomersComponent]
})
export class CustomersModule { }
