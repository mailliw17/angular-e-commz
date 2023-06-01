import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = [];
  cartIds = [];
  subtotal = 0;
  shipping = 10000;

  constructor() { }

  fetchCart(): [object[], number] {
    if (!this.cart.length) {
      this.subtotal = 0;
      let savedCart = localStorage.getItem("cart-item");
      let savedCartIds = localStorage.getItem("cart-item-ids");
      if (savedCart && savedCartIds) {
        this.cart = JSON.parse(savedCart);
        this.cartIds = JSON.parse(savedCartIds);
      }
    }

    if (this.cart.length)
      this.subtotal = this.cart?.reduce((sum, item) => sum += item.price*item.qty, 0);
    return [this.cart, this.subtotal];
  }

  fetchShipping() {
    return this.shipping;
  }

  updateSubtotal() {
    if (this.cart.length)
      this.subtotal = this.cart?.reduce((sum, item) => sum += item.price*item.qty, 0);
    else
      this.subtotal = 0;
    return this.subtotal;
  }

  addItem(payload : {product: Product, qty: number}) {
    let {product, qty} = payload;
    let index = this.cartIds.indexOf(product.id);
    if (index != -1) {
      let newQty = this.cart[index].qty + qty;
      this.cart[index].qty = newQty > product.stock ? product.stock : newQty;
    } else {
      let payload = {
        id: product.id, //required to db
        price: product.price, //required to db
        qty: qty, //required to db
        name: product.name,
        image: product.image,
        stock: product.stock,
        seller_id: product.seller_id,
        seller_name: product.seller_name
      }
      this.cart.push(payload);
      this.cartIds.push(product.id);
    }
    localStorage.setItem('cart-item', JSON.stringify(this.cart));
    localStorage.setItem('cart-item-ids', JSON.stringify(this.cartIds));
  }

  removeItem(id: string) {
    let index = this.cartIds.indexOf(id);
    this.cart.splice(index, 1);
    this.cartIds.splice(index, 1);

    localStorage.setItem('cart-item', JSON.stringify(this.cart));
    localStorage.setItem('cart-item-ids', JSON.stringify(this.cartIds));
  }

  clearCart() {
    this.cartIds = [];
    this.cart = [];
    this.subtotal = 0;
    
    localStorage.removeItem('cart-item');
    localStorage.removeItem('cart-item-ids');
  }
}
