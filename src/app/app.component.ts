import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-e-commz';
  urlSplit : String

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    var a = window.location.pathname.split('/');
    this.urlSplit =  a[1]
    console.log(this.urlSplit);
  }
}
