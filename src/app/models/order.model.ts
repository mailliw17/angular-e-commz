import * as moment from "moment";
import { User } from "./user.model";

export interface Order {
  id: string,
  user_data: User,
  user_name: string,
  dest_address: string,
  shipping_price: number,
  waybill_number: number,
  status: string,
  total_price: number,
  payment_method: string,
  created_on: Date | string,
  order_detail: []
}