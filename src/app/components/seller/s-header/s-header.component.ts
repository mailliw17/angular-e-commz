import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-s-header',
  templateUrl: './s-header.component.html',
  styleUrls: ['./s-header.component.scss']
})
export class SHeaderComponent implements OnInit {
  tampilToken:any

  constructor(
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.testDecrypt()
  }

  testDecrypt() {
    this.tampilToken =  this.authService.decrypt(localStorage.getItem('token'))

    // Split the string by '-' to separate different parts
    const tokenParts = this.tampilToken.split('-');

    // Extract the "Buyer" value (assuming it's always the last part)
    const buyerValue = tokenParts[tokenParts.length - 1];

    console.log(buyerValue); // Output: "Buyer"
  }

}
