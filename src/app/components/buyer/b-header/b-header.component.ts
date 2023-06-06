import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-b-header',
  templateUrl: './b-header.component.html',
  styleUrls: ['./b-header.component.scss']
})
export class BHeaderComponent implements OnInit {
  isLogin: boolean = false
  buyerInfo : any = []

  constructor(
    private router: Router,
    private authService : AuthService,
  ) { }

  ngOnInit(): void {
    this.checkIsLogin()
    this.getUserByToken()
  }

  onLogout() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }

  onSearch(input: string) {
    if (!input) return this.router.navigate(['/catalog']);
    return this.router.navigate(['/catalog'], {
      queryParams: {
        search: input,
      }
    });
  }

  checkIsLogin() {
    if(localStorage.getItem("token")){
      this.isLogin = true
    }
  }

  getUserByToken() {
    this.authService.getUserByToken()
      .subscribe(
        res => {
          this.buyerInfo = res
        },
        err => {
          console.log(err);
        }
      )
  }
}
