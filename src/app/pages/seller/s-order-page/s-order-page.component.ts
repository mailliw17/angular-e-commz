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
    private orderService : OrderService,
    private authSevice : AuthService
  ) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders() {
    this.orderService.getOrders()
    .subscribe(
      res => { 
        this.orders = res
        // console.log(this.orders);
      },
      err => {
        console.log(err);
      }
    )
  }
}
