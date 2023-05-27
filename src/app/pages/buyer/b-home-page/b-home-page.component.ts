import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/buyer/product.service';

@Component({
  selector: 'app-b-home-page',
  templateUrl: './b-home-page.component.html',
  styleUrls: ['./b-home-page.component.scss']
})
export class BHomePageComponent implements OnInit {

  products = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.onFetchProducts();
  }

  onFetchProducts() {
    this.products = this.productService.fetch();
  }
}
