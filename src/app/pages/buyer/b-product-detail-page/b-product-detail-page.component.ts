import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/buyer/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-b-product-detail-page',
  templateUrl: './b-product-detail-page.component.html',
  styleUrls: ['./b-product-detail-page.component.scss']
})
export class BProductDetailPageComponent implements OnInit {

  productId = '';
  product:Product
  
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params.id;
    this.onFetchProduct(this.productId);
  }

  onFetchProduct(id: string) {
    this.product = this.productService.fetchById(id);
  }
}
