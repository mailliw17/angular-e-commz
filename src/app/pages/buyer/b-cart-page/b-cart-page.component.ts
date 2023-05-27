import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/buyer/product.service';

@Component({
  selector: 'app-b-cart-page',
  templateUrl: './b-cart-page.component.html',
  styleUrls: ['./b-cart-page.component.scss']
})
export class BCartPageComponent implements OnInit {

  products = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.onFetchProducts();
  }

  onFetchProducts() {
    this.products = this.productService.fetch();
  }
}
