import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

const BASE_URL =
'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  detailToken : any 

  constructor(
    private http: HttpClient,
    private authService : AuthService,
  ) { }

  postProduct(data : any) {
    return this.http.post<any>(BASE_URL, data)
  } 

  getUserByToken() {
    this.authService.getUserByToken()
      .subscribe(
        res => {
          this.detailToken = res
        },
        err => {
          console.log(err);
        }
      )
  }

  getProducts() {
    this.getUserByToken()
    return this.http.get<any>(BASE_URL + '?seller_id=' + this.detailToken[0] )
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
