import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL =
'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  postProduct(data : any) {
    return this.http.post<any>(BASE_URL, data)
      .pipe(
        map(
          (res:any) => {
            return res
          }
        )
      )
  } 

  getProducts() {
    return this.http.get<any>(BASE_URL)
      .pipe(
        map(
          (res:any) => {
            return res
          }
        )
      )
  }

  getProductById(id: String) {
    return this.http.get<any>(BASE_URL +'/' + id)
      .pipe(
        map(
          (res:any) => {
            return res
          }
        )
      )
  }

  deleteProduct(id: String) {
    return this.http.delete(BASE_URL +'/' + id)
  }

  updateProduct(id:String, data:any) {
    return this.http.put(BASE_URL +'/' + id, data)
  }
}
