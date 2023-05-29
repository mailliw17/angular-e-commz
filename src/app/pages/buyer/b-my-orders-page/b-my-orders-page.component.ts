import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/buyer/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-b-my-orders-page',
  templateUrl: './b-my-orders-page.component.html',
  styleUrls: ['./b-my-orders-page.component.scss']
})
export class BMyOrdersPageComponent implements OnInit {

  products:Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.onFetchProducts();
  }

  onFetchProducts() {
    this.products = this.productService.fetch();
  }
}
