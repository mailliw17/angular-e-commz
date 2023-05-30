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

  postOrder(data : any) {
    return this.http.post<any>(BASE_URL, data)
      .pipe(
        map(
          (res:any) => {
            return res
          }
        )
      )
  }

  getOrderById(id: String) {
    return this.http.get<any>(BASE_URL +'/' + id)
      .pipe(
        map(
          (res:any) => {
            return res
          }
        )
      )
  }

  updateOrder(id:String, data:any) {
    return this.http.put(BASE_URL +'/' + id, data)
  }
}
