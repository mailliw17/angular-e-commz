import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

import { Order } from 'src/app/models/order.model';

import { OrderService } from 'src/app/services/buyer/order.service';

@Component({
  selector: 'app-b-my-order-detail-page',
  templateUrl: './b-my-order-detail-page.component.html',
  styleUrls: ['./b-my-order-detail-page.component.scss']
})
export class BMyOrderDetailPageComponent implements OnInit {

  orderId = '';
  order:Order;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.params.id;
    this.onFetchOrder(this.orderId);
  }

  onFetchOrder(id: string) {
    this.orderService.getOrderById(id)
    .subscribe(
      res => { 
        this.order = res;
        this.order.created_on = moment(this.order.created_on).format('DD MMM YYYY, hh:mm ');
      },
      err => { console.log(err) }
    )
  }

}
