import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-s-header',
  templateUrl: './s-header.component.html',
  styleUrls: ['./s-header.component.scss']
})
export class SHeaderComponent implements OnInit {
  sellerName : String
  sellerId : String

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
    var dataUser =  this.authService.decrypt(localStorage.getItem("token"))

    // Find the index of the first occurrence of '|'
    const splitTheUserData = dataUser.split('|');

    // Extract the substring from the start of the token to the first dash index
    this.sellerId = splitTheUserData[0]
    this.sellerName = splitTheUserData[2]
    // this.sellerName = dataUser.substring(1, splitTheUserData);

    // console.log(splitTheUserData);
    // console.log(this.sellerId);
  }
}
