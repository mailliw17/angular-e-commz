import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { OrderService } from 'src/app/services/buyer/order.service';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-b-my-orders-page',
  templateUrl: './b-my-orders-page.component.html',
  styleUrls: ['./b-my-orders-page.component.scss']
})
export class BMyOrdersPageComponent implements OnInit {

  status = [
    { name: 'Pending', value: 'PENDING' },
    { name: 'Paid', value: 'PAID' },
    { name: 'Delivery', value: 'DELIVERY' },
    { name: 'Completed', value: 'COMPLETED' },
  ];
  sorts = [
    { name: 'None', value: 'none' },
    { name: 'Newest', value: 'newest' },
    { name: 'Oldest', value: 'oldest' },
  ];

  orders: Order[];
  filteredOrders: Order[];

  activeFilter: string[];
  activeSort: string = 'none';

  pages: number[] = [0];
  activePage: number = 1;
  itemsPerPage: number = 2;

  filterForm = new FormGroup({
    filters: new FormArray([])
  });

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.initFilter();
    this.onFetchOrder();
  }

  initFilter() {
    this.status.forEach(() => {
      const control = new FormControl(false);
      (<FormArray>this.filterForm.get('filters')).push(control);
    });
  }

  onFilter() {
    this.activeFilter = this.filterForm.value.filters.reduce((arr, filter, index) => {
      if (filter) arr.push(this.status[index].value);
      return arr;
    }, []);

    if (this.activeFilter.length) {
      this.filteredOrders = this.orders.filter(order => this.activeFilter.includes(order.status));
    } else {
      this.filteredOrders = this.orders;
    }

    this.pages = Array.from(Array(Math.ceil(this.filteredOrders.length/this.itemsPerPage)).keys())
  }

  onSort(type: string) {
    this.activeSort = type;
    switch (type) {
      case 'newest':
        this.filteredOrders.sort((a,b) => new Date(b.created_on).valueOf() - new Date(a.created_on).valueOf());
        break;
      case 'oldest':
        this.filteredOrders.sort((a,b) => new Date(a.created_on).valueOf() - new Date(b.created_on).valueOf());
        break;
    
      default:
        this.filteredOrders = [...this.orders];
        break;
    }
  }

  onChangePage(page: number) {
    this.activePage = page;
  }

  paginate(items: Order[]) {
    return items?.slice((this.activePage - 1) * this.itemsPerPage, this.activePage * this.itemsPerPage);
  }

  onFetchOrder() {
    let params = { 'user_id' : '0860c0c2-5617-4d5a-bd0b-66acae5f7944'}; //todo: change with logged in
    this.orderService.getOrder(params)
    .subscribe(
      res => {
        this.orders = res;
        this.onFilter();
      },
      err => { console.log(err) }
    )
  }
}
