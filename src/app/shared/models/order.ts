import { OrderItem } from "./orderItem";
export interface Order {
  customerId: number;
  orderItems: OrderItem[];
}

