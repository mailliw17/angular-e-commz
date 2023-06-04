import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/buyer/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-b-home-page',
  templateUrl: './b-home-page.component.html',
  styleUrls: ['./b-home-page.component.scss']
})
export class BHomePageComponent implements OnInit {

  categories = [
    { name: 'Clothing', value: 'clothing', image: 'https://static.nike.com/a/images/t_default/6bde9e9b-4154-4b3f-b093-615bb493505c/jordan-flight-essentials-oversized-t-shirt-C7XVkQ.png' },
    { name: 'Electronics', value: 'electronics', image: 'https://www.electrolux.vn/globalassets/blogs/cach-v-sinh-t-lnh/electrolux-10850.png' },
    { name: 'Furniture', value: 'furniture', image: 'https://cb.scene7.com/is/image/Crate/cb_mSC_20230209_Furniture_Media?wid=600&qlt=75&op_sharpen=1' },
    { name: 'Health Products', value: 'health_products', image: 'https://cf.shopee.co.id/file/c9eeccf2f818a3a9779c0b78bfd23f26' },
    { name: 'Household Items', value: 'household_items', image: 'https://telehealth.keckmedicine.org/wp-content/uploads/2021/11/Household-cleaning-products.jpg' },
  ];

  products:Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.onFetchProducts();
  }

  onFetchProducts() {
    this.productService.getProducts({_limit: 4})
    .subscribe(
      res => { this.products = res },
      err => { console.log(err) }
    )
  }
}
