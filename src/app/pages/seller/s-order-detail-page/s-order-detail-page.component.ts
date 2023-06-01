import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/seller/order.service';

@Component({
  selector: 'app-s-order-detail-page',
  templateUrl: './s-order-detail-page.component.html',
  styleUrls: ['./s-order-detail-page.component.scss']
})
export class SOrderDetailPageComponent implements OnInit {
  id_url = String(this.route.snapshot.params.id);
  order:any = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService : OrderService,
    ) { }

  ngOnInit(): void {
    this.getOrderById()
  }

  getOrderById() {
    this.orderService.getOrderById(this.id_url)
    .subscribe(
      res => { 
        this.order = res
        console.log(this.order);
      },
      err => {
        console.log(err);
      }
    )
  }

  arrangeDelivery(id: String) {
    const updatedData = { 
      "status"  : "DELIVERY"
     };
     
    this.orderService.updateStatusToDelivery(this.id_url, updatedData)
    .subscribe(
      res => {
        alert('The package was successfully submitted to the expedition')
        this.router.navigate(['/seller/manage-order']);
      },
      err => {
        console.log(err);
      }
    )
  }
}
