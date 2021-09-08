import { Component, OnInit } from '@angular/core';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';
import { Order } from '../shared/models/order';
import { Customer } from '../shared/models/customer';
import { OrderItem } from '../shared/models/orderItem';
import { DataService } from '../core/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  customer: Customer = {id: 0, name: ''};
  id: number = 0;
  constructor(private dataService: DataService,
    private activatedRoute: ActivatedRoute
   ) { }

  ngOnInit(): void {
    let val = this.activatedRoute.snapshot.paramMap.get('id');
    if (val) {
      this.id = parseInt(val);
    }
    this.dataService.getOrders(this.id).subscribe((orders:Order[]) => {
      this.orders = orders;
    });
    this.dataService.getCustomer(this.id).subscribe((cust:Customer) => {
      this.customer = cust;
    });
  }

}
