import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-s-manage-product-page',
  templateUrl: './s-manage-product-page.component.html',
  styleUrls: ['./s-manage-product-page.component.scss']
})
export class SManageProductPageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  deleteProduct() {
    alert('Product deleted')

    // ubah status pengiriman ke DELIVERY
    this.router.navigate(['seller/manage-product']);

  }

}
