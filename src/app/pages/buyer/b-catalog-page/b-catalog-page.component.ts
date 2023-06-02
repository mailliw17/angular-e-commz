import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ProductService } from 'src/app/services/buyer/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-b-catalog-page',
  templateUrl: './b-catalog-page.component.html',
  styleUrls: ['./b-catalog-page.component.scss']
})
export class BCatalogPageComponent implements OnInit {

  categories = [
    { name: 'Clothing', value: 'clothing' },
    { name: 'Electronics', value: 'electronics' },
    { name: 'Furniture', value: 'furniture' },
    { name: 'Health Products', value: 'health_products' },
    { name: 'Household Items', value: 'household_items' },
  ];
  sorts = [
    { name: 'None', value: 'none' },
    { name: 'Price', value: 'price_asc', icon: 'bi-arrow-up' },
    { name: 'Price', value: 'price_desc', icon: 'bi-arrow-down' },
  ];

  products: Product[];
  filteredProducts: Product[];

  search: string;
  activeFilter: string[];
  activeSort: string = 'none';

  pages: number[] = [0];
  activePage: number = 1;
  itemsPerPage: number = 2;

  filterForm = new FormGroup({
    filters: new FormArray([])
  });

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.initFilter();
    this.onSearch();
  }

  onSearch() {
    this.route.queryParams
      .subscribe(params => {
        this.search = params.search;
        this.onFetchProducts(params.search);
      }
    );
  }

  initFilter() {
    this.categories.forEach(() => {
      const control = new FormControl(false);
      (<FormArray>this.filterForm.get('filters')).push(control);
    });
  }

  onFilter() {
    this.activeFilter = this.filterForm.value.filters.reduce((arr, filter, index) => {
      if (filter) arr.push(this.categories[index].value);
      return arr;
    }, []);

    if (this.activeFilter.length) {
      this.filteredProducts = this.products.filter(product => this.activeFilter.includes(product.category_id));
    } else {
      this.filteredProducts = this.products;
    }

    this.pages = Array.from(Array(Math.ceil(this.filteredProducts.length/this.itemsPerPage)).keys())
  }

  onSort(type: string) {
    this.activeSort = type;
    switch (type) {
      case 'price_asc':
        this.filteredProducts.sort((a,b) => a.price - b.price);
        break;
      case 'price_desc':
        this.filteredProducts.sort((a,b) => b.price - a.price);
        break;
    
      default:
        this.filteredProducts = [...this.products];
        break;
    } 
  }

  onChangePage(page: number) {
    this.activePage = page;
  }

  paginate(items: Product[]) {
    return items?.slice((this.activePage - 1) * this.itemsPerPage, this.activePage * this.itemsPerPage);
  }

  onFetchProducts(search: string) {
    let params = {
      ...(search && {'name_like' : search})
    };
    this.productService.getProducts(params)
    .subscribe(
      res => {
        this.products = res;
        this.onFilter();
      },
      err => { console.log(err) }
    )
  }
}
