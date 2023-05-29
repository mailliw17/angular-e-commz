import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-manage-product-page',
  templateUrl: './s-manage-product-page.component.html',
  styleUrls: ['./s-manage-product-page.component.scss']
})
export class SManageProductPageComponent implements OnInit {
  // dtoptions:DataTables.Settings={}
  constructor() { }

  ngOnInit(): void {
    // this.dtoptions = {
    //   pagingType: 'full_numbers'
    // }
  }

}
