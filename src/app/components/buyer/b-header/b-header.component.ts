import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-b-header',
  templateUrl: './b-header.component.html',
  styleUrls: ['./b-header.component.scss']
})
export class BHeaderComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSearch(input: string) {
    if (!input) return this.router.navigate(['/catalog']);
    return this.router.navigate(['/catalog'], {
      queryParams: {
        search: input,
      }
    });
  }
}
