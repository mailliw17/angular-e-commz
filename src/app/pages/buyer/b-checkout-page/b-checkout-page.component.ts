import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/buyer/cart.service';

@Component({
  selector: 'app-b-checkout-page',
  templateUrl: './b-checkout-page.component.html',
  styleUrls: ['./b-checkout-page.component.scss']
})
export class BCheckoutPageComponent implements OnInit {

  cart = [];
  subtotal = 0;
  shipping = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.onFetchCart();

  }

  onFetchCart() {
    this.shipping = this.cartService.fetchShipping();
    [this.cart, this.subtotal] = this.cartService.fetchCart(); //+subscribe
  }
}
