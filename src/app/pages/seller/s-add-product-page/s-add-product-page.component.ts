import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProductService } from 'src/app/services/seller/product.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-s-add-product-page',
  templateUrl: './s-add-product-page.component.html',
  styleUrls: ['./s-add-product-page.component.scss']
})
export class SAddProductPageComponent implements OnInit {
  productModelObj : Product
  uuid = uuid.v4()
  sellerInfo : any 
  form : FormGroup
  submitted = false;

  constructor(
    private productService : ProductService,
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserDetailFromToken()

    this.form = new FormGroup({
      name : new FormControl('', Validators.required),
      image : new FormControl('', Validators.required),
      description : new FormControl('', Validators.required),
      price : new FormControl('', Validators.required),
      stock : new FormControl('', Validators.required),
      category_id : new FormControl('', Validators.required),
      id : new FormControl(this.uuid, Validators.required),
      seller_id : new FormControl(this.sellerInfo[0], Validators.required),
      seller_name : new FormControl(this.sellerInfo[2], Validators.required),
      created_on : new FormControl(new Date(), Validators.required)
    })
  }

  getUserDetailFromToken() {
    this.authService.getUserDetailFromToken()
      .subscribe(
        res => {
          this.sellerInfo = res
        },
        err => {
          console.log(err);
        }
      )
  }

  onSubmit():void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.productService.postProduct(this.form.value)
      .subscribe(
        res => {
          alert('Success add product')
          this.router.navigate(['/seller/manage-product']);
        },
        err => {
          console.log(err);
        }
      )
  }

 

}
