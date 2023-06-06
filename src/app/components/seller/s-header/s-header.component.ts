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
    this.getUserDetailFromToken()
  }

  onLogout() {
    localStorage.clear()
    this.router.navigate(['/login'])
    location.reload();
  }

  
  getUserDetailFromToken() {
    this.authService.getUserDetailFromToken()
      .subscribe(
        res => {
            // console.log(res);
            this.sellerInfo = res
        },
        err => {
          console.log(err);
        }
      )
  }
}
