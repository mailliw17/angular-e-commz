import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Product } from 'src/app/models/product.model';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProductService } from 'src/app/services/buyer/product.service';
import { CartService } from 'src/app/services/buyer/cart.service';

@Component({
  selector: 'app-b-product-detail-page',
  templateUrl: './b-product-detail-page.component.html',
  styleUrls: ['./b-product-detail-page.component.scss']
})
export class BProductDetailPageComponent implements OnInit {

  buyerInfo: any;
  productId = '';
  product:Product;
  qty = 1;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService,
    private authService : AuthService,
    private productService: ProductService, 
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getUserByToken();
    this.productId = this.route.snapshot.params.id;
    this.onFetchProduct(this.productId);
  }

  getUserByToken() {
    this.authService.getUserByToken()
      .subscribe(
        res => { this.buyerInfo = res },
        err => { console.log(err) }
      )
  }

  onFetchProduct(id: string) {
    this.productService.getProductById(id)
    .subscribe(
      res => { this.product = res },
      err => { console.log(err) }
    )
  }

  onAddToCart() {
    if (!this.buyerInfo) return this.router.navigate(['/login'])
    
    let payload = {
      product: this.product,
      qty: this.qty
    }
    this.cartService.addItem(payload);
    this.toast.success('Product added to cart', 'Success');
  }
}
