import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL_PRODUCTS =
'http://localhost:3000/products';

const BASE_URL_ORDERS =
'http://localhost:3000/orders';

const BASE_URL_USERS =
'http://localhost:3000/users';

@Injectable({
  providedIn: 'root'
})
export class SimpleReportService {

  constructor(
    private http: HttpClient
  ) { }

  countProducts() {
    return this.http.get<any>(BASE_URL_PRODUCTS)
  }

  countOrders() {
    return this.http.get<any>(BASE_URL_ORDERS)
  }

  countBuyers() {
    return this.http.get<any>(BASE_URL_USERS)
  }
}
