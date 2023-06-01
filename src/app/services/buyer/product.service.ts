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

  getProducts() {
    return this.http.get<any>(BASE_URL)
  }

  getProductById(id: string) {
    return this.http.get<any>(BASE_URL +'/' + id)
  }
}
