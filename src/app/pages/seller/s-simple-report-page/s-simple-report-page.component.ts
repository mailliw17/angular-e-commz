import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleReportService } from 'src/app/services/seller/simple-report.service';

@Component({
  selector: 'app-s-simple-report-page',
  templateUrl: './s-simple-report-page.component.html',
  styleUrls: ['./s-simple-report-page.component.scss']
})
export class SSimpleReportPageComponent implements OnInit {
  numberOfProduct : number 
  numberOfOrder : number
  numberOfBuyer : number = 0

  constructor(
    private simpleReportService : SimpleReportService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.countProduct()
    this.countOrder()
    this.countBuyer()
  }

  countProduct() {
    this.simpleReportService.countProducts()
      .subscribe(
        res => {
          this.numberOfProduct = res.length
          // console.log(this.numberOfProduct);
        },
        err => {
          console.log(err);
        }
      )
  }

  countOrder() {
    this.simpleReportService.countOrders()
      .subscribe(
        res => {
          this.numberOfOrder = res.length
          // console.log(this.numberOfProduct);
        },
        err => {
          console.log(err);
        }
      )
  }

  countBuyer() {
    this.simpleReportService.countBuyers()
    .subscribe(
      res => {

        for (let i = 0; i < res.length; i++) {
          if(res[i].role == 'Buyer') {
              this.numberOfBuyer++
          }
        }
      },
      err => {
        console.log(err);
      }
    )
  }

}
