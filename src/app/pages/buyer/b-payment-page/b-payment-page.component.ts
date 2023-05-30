import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

@Component({
  selector: 'app-b-payment-page',
  templateUrl: './b-payment-page.component.html',
  styleUrls: ['./b-payment-page.component.scss']
})
export class BPaymentPageComponent implements OnInit {

  id: string = '';
  paymentMethod: string = '';
  total: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        // todo: check if order id status is pending

        // if pending
        this.id = params.order_id;
        this.paymentMethod = params.method;
        this.total = parseInt(params.total);
      }
    );
  }

  payOrder() {
    // todo: get order by id
    // todo: update order status to paid

    this.router.navigate(['']);
  }
}
