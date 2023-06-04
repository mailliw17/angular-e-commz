import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const BASE_URL =
'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(params = undefined) {
    return this.http.get<any>(BASE_URL, {params: params});
  }

  getProductById(id: string) {
    return this.http.get<any>(BASE_URL +'/' + id)
  }

  updateProduct(id:String, data:any) {
    return this.http.put(BASE_URL +'/' + id, data)
  }
}
