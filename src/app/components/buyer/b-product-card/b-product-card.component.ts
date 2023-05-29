import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-product-card',
  templateUrl: './b-product-card.component.html',
  styleUrls: ['./b-product-card.component.scss']
})
export class BProductCardComponent implements OnInit {
  @Input() item: {} = {};
  @Input() type: string = 'card';

  @Output() onDeleteProduct = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
