import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/buyer/cart.service';

@Component({
  selector: 'app-b-checkout-page',
  templateUrl: './b-checkout-page.component.html',
  styleUrls: ['./b-checkout-page.component.scss']
})
export class BCheckoutPageComponent implements OnInit {

  payments = [
    {name: 'BCA Virtual Account', value: 'va_bca'},
    {name: 'QRIS', value: 'qris'}
  ];

  checkoutForm = new FormGroup({
    'address': new FormControl(null, [Validators.required]),
    'payment': new FormControl(null, [Validators.required]),
  })

  submitted = false;
  
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

  onSubmit() {
    this.submitted = true;
    if (this.checkoutForm.invalid) {
      return;
    }
    console.log(this.checkoutForm.value);
  }
}
