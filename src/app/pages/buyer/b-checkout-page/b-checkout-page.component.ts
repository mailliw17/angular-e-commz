import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProductService } from 'src/app/services/buyer/product.service';
import { CartService } from 'src/app/services/buyer/cart.service';
import { OrderService } from 'src/app/services/buyer/order.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-b-checkout-page',
  templateUrl: './b-checkout-page.component.html',
  styleUrls: ['./b-checkout-page.component.scss']
})
export class BCheckoutPageComponent implements OnInit, OnDestroy {

  order_uuid = uuid.v4();
  buyerInfo: any;
  
  cart = [];
  subtotal = 0;
  shipping = 0;

  submitted = false;
  checkoutForm = new FormGroup({
    'address': new FormControl(null, [Validators.required]),
    'payment': new FormControl(null, [Validators.required]),
  })
  payments = [
    {name: 'BCA Virtual Account', value: 'va_bca'},
    {name: 'QRIS', value: 'qris'}
  ];

  constructor(
    private router: Router,
    private toast: ToastrService,
    private authService : AuthService,
    private productService: ProductService,
    private cartService: CartService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getUserDetailFromToken();
    this.onFetchCart();
  }

  getUserDetailFromToken() {
    this.authService.getUserDetailFromToken()
      .subscribe(
        res => { this.buyerInfo = res },
        err => { console.log(err) }
      )
  }

  onFetchCart() {
    this.shipping = this.cartService.fetchShipping();
    [this.cart, this.subtotal] = this.cartService.fetchCart();
  }

  onSubmit() {
    this.submitted = true;
    if (this.checkoutForm.invalid) {
      return;
    }

    let orderDetailPayload = this.cart.map(item => {
      return {
        product_image: item.image,
        product_name: item.name,
        product_qty: item.qty,
        product_price: item.price,
        product_seller_id: item.seller_id,
        product_seller_name: item.seller_name
      }
    })
    
    let orderPayload = {
      id: this.order_uuid,
      user_id: this.buyerInfo[0],
      user_name: this.buyerInfo[2],
      dest_address: this.checkoutForm.value.address,
      shipping_price: this.shipping,
      waybill_number: Math.round(Math.random() * 10000),
      status: 'PENDING',
      total_price: this.subtotal + this.shipping,
      payment_method: this.checkoutForm.value.payment,
      created_on: new Date(),
      order_detail: orderDetailPayload
    }

    this.cart.forEach(product => {
      product.stock = product.stock - product.qty;
      delete product.qty;

      this.productService.updateProduct(product.id, product).subscribe(
        err => { console.log(err) }
      );
    })

    this.orderService.postOrder(orderPayload)
      .subscribe(
        res => { this.toast.success('Checkout Successful', 'Success') },
        err => { console.log(err) }
      )

    this.cartService.clearCart();
    this.router.navigate(['/payment'], {
      queryParams: {
        order_id: this.order_uuid,
        method: this.checkoutForm.value.payment,
        total: this.subtotal + this.shipping
      }
    });
  }

  ngOnDestroy(): void {
    this.submitted = false;
    this.checkoutForm.reset();
  }
}
