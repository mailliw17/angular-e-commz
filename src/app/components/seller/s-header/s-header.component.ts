import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-s-header',
  templateUrl: './s-header.component.html',
  styleUrls: ['./s-header.component.scss']
})
export class SHeaderComponent implements OnInit {
  sellerInfo : any = []

  constructor(
    private authService : AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getUserByToken()
  }

  onLogout() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }

  
  getUserByToken() {
    this.authService.getUserByToken()
      .subscribe(
        res => {
          this.sellerInfo = res
          // console.log(this.sellerInfo);
        },
        err => {
          console.log(err);
        }
      )
  }
}
