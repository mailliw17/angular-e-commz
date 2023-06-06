import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { OrderService } from 'src/app/services/seller/order.service';

@Component({
  selector: 'app-s-order-page',
  templateUrl: './s-order-page.component.html',
  styleUrls: ['./s-order-page.component.scss']
})
export class SOrderPageComponent implements OnInit {
  orders:any = []
  userDetails : any

  constructor(
    private authService : AuthService,
    private orderService : OrderService
  ) { }

  ngOnInit(): void {
    this.getUserByToken();
    this.getOrders()
  }
  
  getUserByToken() {
    this.authService.getUserByToken()
      .subscribe(
        res => { this.userDetails = res },
        err => { console.log(err) }
      )
  }

  getOrders() {
    this.orderService.getOrders()
    .subscribe(
      res => {
        let filtered = res.filter(order =>
          order.order_detail.some(detail => 
            detail.product_seller_id === this.userDetails[0]
          )
        )
        this.orders = filtered;
      },
      err => {
        console.log(err);
      }
    )
  }
}
