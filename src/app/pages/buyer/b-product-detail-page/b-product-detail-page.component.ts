import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/models/product.model';

import { ProductService } from 'src/app/services/buyer/product.service';
import { CartService } from 'src/app/services/buyer/cart.service';

@Component({
  selector: 'app-b-product-detail-page',
  templateUrl: './b-product-detail-page.component.html',
  styleUrls: ['./b-product-detail-page.component.scss']
})
export class BProductDetailPageComponent implements OnInit {

  productId = '';
  product:Product;
  qty = 1;
  
  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params.id;
    this.onFetchProduct(this.productId);
  }

  onFetchProduct(id: string) {
    this.product = this.productService.fetchById(id);
  }

  onAddToCart() {
    let payload = {
      product: this.product,
      qty: this.qty
    }
    this.cartService.addItem(payload);
  }
}
