import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/seller/product.service';

@Component({
  selector: 'app-s-manage-product-page',
  templateUrl: './s-manage-product-page.component.html',
  styleUrls: ['./s-manage-product-page.component.scss']
})
export class SManageProductPageComponent implements OnInit {
  constructor(
    private router: Router,
    private productService : ProductService,
    ) { }

  ngOnInit(): void {
    this.productService.getProduct()
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )
  }

  deleteProduct() {
    alert('Product deleted')

    // ubah status pengiriman ke DELIVERY
    this.router.navigate(['seller/manage-product']);

  }

}
