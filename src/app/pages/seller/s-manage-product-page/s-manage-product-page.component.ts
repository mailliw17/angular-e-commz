import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/seller/product.service';

@Component({
  selector: 'app-s-manage-product-page',
  templateUrl: './s-manage-product-page.component.html',
  styleUrls: ['./s-manage-product-page.component.scss']
})
export class SManageProductPageComponent implements OnInit {
  products:any = []

  constructor(
    private router: Router,
    private productService : ProductService,
    ) { }

  ngOnInit(): void {
   this.getProducts()
  }

  getProducts() {
    this.productService.getProducts()
    .subscribe(
      res => {
        this.products = res
        // console.log(this.products);
      },
      err => {
        console.log(err);
      }
    )
  }

  deleteProduct(id:String) {
    this.productService.deleteProduct(id)
      .subscribe(
        res => {
          alert('Product deleted')
          this.ngOnInit()
        },
        err => {
          console.log(err);
        }
      )
  }

}
