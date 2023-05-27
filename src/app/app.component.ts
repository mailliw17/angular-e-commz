import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-e-commz';
  urlSplit : String

  ngOnInit() {
    var a = window.location.pathname.split('/');
    this.urlSplit =  a[1]
    console.log(this.urlSplit);
  }
}
