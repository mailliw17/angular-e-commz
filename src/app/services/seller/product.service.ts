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
  } 

  getProducts() {
    return this.http.get<any>(BASE_URL)
  }

  getProductById(id: String) {
    return this.http.get<any>(BASE_URL +'/' + id)
  }

  deleteProduct(id: String) {
    return this.http.delete(BASE_URL +'/' + id)
  }

  updateProduct(id:String, data:any) {
    return this.http.put(BASE_URL +'/' + id, data)
  }
}
