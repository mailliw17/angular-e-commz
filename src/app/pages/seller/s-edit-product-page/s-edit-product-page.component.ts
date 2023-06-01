import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/seller/product.service';

@Component({
  selector: 'app-s-edit-product-page',
  templateUrl: './s-edit-product-page.component.html',
  styleUrls: ['./s-edit-product-page.component.scss']
})
export class SEditProductPageComponent implements OnInit {
  formValue !:FormGroup
  productModelObj : Product
  id_url = String(this.route.snapshot.params.id);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService : ProductService,
  ) { }

  editForm = new FormGroup({
    name : new FormControl('', Validators.required),
    image : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required),
    price : new FormControl('', Validators.required),
    stock : new FormControl('', Validators.required),
    category_id : new FormControl('', Validators.required),
    id : new FormControl('', Validators.required),
    seller_id : new FormControl('', Validators.required),
    seller_name : new FormControl('', Validators.required),
    created_on : new FormControl('', Validators.required)
  })

  // onUpdate():void {
  //   this.productService.postProduct(this.editForm.value)
  //     .subscribe(
  //       res => {
  //         alert('Success add product')
  //         this.router.navigate(['/seller/manage-product']);
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     )
  // }

  ngOnInit(): void {
    
    this.getDetailProduct(this.id_url)
  }

  getDetailProduct(id:String) {
    this.productService.getProductById(id)
      .subscribe(
        res => {
          console.log(res);
          this.editForm = new FormGroup({
            name : new FormControl(res['name'], Validators.required),
            image : new FormControl(res['image'], Validators.required),
            description : new FormControl(res['description'], Validators.required),
            price : new FormControl(res['price'], Validators.required),
            stock : new FormControl(res['stock'], Validators.required),
            category_id : new FormControl(res['category_id'], Validators.required),
            id : new FormControl(res['id'], Validators.required),
            seller_id : new FormControl(res['seller_id'], Validators.required),
            seller_name : new FormControl(res['seller_name'], Validators.required),
            created_on : new FormControl(res['created_on'], Validators.required)
          })
        },
        err => {
          console.log(err);
        }
      )
  }

  onUpdate() {
    // console.log(this.editForm.value);
    this.productService.updateProduct(this.id_url, this.editForm.value)
    .subscribe(
      res => {
        alert('Product updated')
        this.router.navigate(['/seller/manage-product']);
      },
      err => {
        console.log(err);
      }
    )
  }

}
