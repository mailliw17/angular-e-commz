import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/buyer/cart.service';

@Component({
  selector: 'app-b-cart-page',
  templateUrl: './b-cart-page.component.html',
  styleUrls: ['./b-cart-page.component.scss']
})
export class BCartPageComponent implements OnInit {

  cart = [];
  subtotal = 0;
  shipping = 0;

  constructor(
    private cartService: CartService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.onFetchCart();
  }

  onFetchCart() {
    this.shipping = this.cartService.fetchShipping();
    [this.cart, this.subtotal] = this.cartService.fetchCart();
  }

  onUpdateCart() {
    this.subtotal = this.cartService.updateSubtotal();
  }

  onDeleteCart(id: string) {
    this.cartService.removeItem(id);
    this.toast.warning('Product removed to cart', 'Warning');
    this.onFetchCart();
  }
}
