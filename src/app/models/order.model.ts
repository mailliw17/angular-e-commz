export interface Order {
  id: string,
  user_id: string,
  dest_address: string,
  shipping_price: number,
  waybill_number: number,
  status: string,
  total_price: number,
  payment_method: string,
  created_on: Date,
}