import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-product-card',
  templateUrl: './b-product-card.component.html',
  styleUrls: ['./b-product-card.component.scss']
})
export class BProductCardComponent implements OnInit {
  @Input() props: { type: string; }

  constructor() { }

  ngOnInit(): void {
  }

}
