import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/buyer/product.service';

@Component({
  selector: 'app-b-catalog-page',
  templateUrl: './b-catalog-page.component.html',
  styleUrls: ['./b-catalog-page.component.scss']
})
export class BCatalogPageComponent implements OnInit {

  products = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.onFetchProducts();
  }

  onFetchProducts() {
    this.products = this.productService.fetch();
  }
}
