import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/buyer/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-b-home-page',
  templateUrl: './b-home-page.component.html',
  styleUrls: ['./b-home-page.component.scss']
})
export class BHomePageComponent implements OnInit {

  products:Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.onFetchProducts();
  }

  onFetchProducts() {
    this.productService.getProducts()
    .subscribe(
      res => { this.products = res },
      err => { console.log(err) }
    )
  }
}
