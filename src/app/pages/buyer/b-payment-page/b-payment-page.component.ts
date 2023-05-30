import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { OrderService } from 'src/app/services/buyer/order.service';
import { Order } from 'src/app/models/order.model';


@Component({
  selector: 'app-b-payment-page',
  templateUrl: './b-payment-page.component.html',
  styleUrls: ['./b-payment-page.component.scss']
})
export class BPaymentPageComponent implements OnInit {

  orderId: string;
  paymentMethod: string = '';
  total: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.orderId = params.order_id;
        this.paymentMethod = params.method;
        this.total = parseInt(params.total);
      }
    );
  }

  payOrder() {
    this.orderService.getOrderById(this.orderId)
    .subscribe(
      res => {
        if (res.status == 'PENDING')
          res.status = 'PAID';
          this.orderService.updateOrder(this.orderId, res)
          .subscribe(
            res => { alert('Order Updated') },
            err => { console.log(err) }
          )
      },
      err => { console.log(err) }
    )

    

    this.router.navigate(['']);
  }
}
