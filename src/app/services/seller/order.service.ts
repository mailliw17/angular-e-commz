import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const BASE_URL =
'http://localhost:3000/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  getOrders() {
    return this.http.get<any>(BASE_URL)
  }

  getOrderById(id: String) {
    return this.http.get<any>(BASE_URL +'/' + id)
  }

  updateStatusToDelivery(id:String, data:any) {
    return this.http.patch(BASE_URL +'/' + id, data)
  }
}
