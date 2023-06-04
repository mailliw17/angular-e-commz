import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL =
'http://localhost:3000/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrder(params = undefined) {
    return this.http.get<any>(BASE_URL, {params: params});
  }

  getOrderById(id: String) {
    return this.http.get<any>(BASE_URL +'/' + id)
  }

  postOrder(data : any) {
    return this.http.post<any>(BASE_URL, data)
  }

  updateOrder(id:String, data:any) {
    return this.http.put(BASE_URL +'/' + id, data)
  }
}
