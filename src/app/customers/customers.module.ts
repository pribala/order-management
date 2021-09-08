import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FilterTextboxComponent } from './customer-list/filter-textbox/filter-textbox.component';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [CustomersComponent, CustomerListComponent, FilterTextboxComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomersRoutingModule
  ],
  exports: [CustomersComponent]
})
export class CustomersModule { }
