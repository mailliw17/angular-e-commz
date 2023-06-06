import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

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
  detailToken : any 

  constructor(
    private http: HttpClient,
    private authService : AuthService,
  ) { }

  getUserDetailFromToken() {
    this.authService.getUserDetailFromToken()
      .subscribe(
        res => {
          this.detailToken = res
          // console.log(this.detailToken);
        },
        err => {
          console.log(err);
        }
      )
  }

  countProducts() {
    this.getUserDetailFromToken()
    return this.http.get<any>(BASE_URL_PRODUCTS+ '?seller_id=' + this.detailToken[0])
  }

  countOrders() {
    return this.http.get<any>(BASE_URL_ORDERS)
  }

  countBuyers() {
    return this.http.get<any>(BASE_URL_USERS)
  }
}
