import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-s-order-detail-page',
  templateUrl: './s-order-detail-page.component.html',
  styleUrls: ['./s-order-detail-page.component.scss']
})
export class SOrderDetailPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  arrangeDelivery() {
    alert('The package was successfully submitted to the expedition')

    // ubah status pengiriman ke DELIVERY
    this.router.navigate(['seller/dashboard']);

  }

}
