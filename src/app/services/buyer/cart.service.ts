import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = [];
  subtotal = 0;
  shipping = 10000;

  constructor() { }

  fetchCart(): [object[], number] {
    if (this.cart.length)
      this.subtotal = this.cart?.reduce((sum, item) => sum += item.price, 0);
    return [this.cart, this.subtotal];
  }

  fetchShipping() {
    return this.shipping;
  }

  add(product:Product) {
    return this.cart.push(product);
  }
}
