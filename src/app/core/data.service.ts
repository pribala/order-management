import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Customer } from '../shared/models/customer';
import { Order } from "../shared/models/order";
import { map, catchError } from "rxjs/operators";
@Injectable()
export class DataService {
  baseUrl: string = 'assets/';
  constructor(private http: HttpClient) {}

  getCustomers() : Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl + 'customers.json').pipe(
      catchError(this.handleError)
    );
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer[]>(this.baseUrl + 'customers.json').pipe(
      map((customers: Customer[]) => {
        let customer = customers.filter((cust: Customer) => cust.id === id);
        return customer[0];
      }),
      catchError(this.handleError)
    )
  }

  getOrders(id: number) : Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + 'orders.json').pipe(
      map((orders: Order[]) => {
        let custOrders = orders.filter((item: Order) => item.customerId === id);
        return custOrders;
      }),
    catchError(this.handleError)
    )
  }

  private handleError(error: any) {
    console.log('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js server.')
  }

}
