import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
  myToken:String
  urlSplit : String

  constructor(
    private authService : AuthService,
    public router: Router,
    private route: ActivatedRoute,
  ) {}

  canActivate(): boolean {
    if (!localStorage.getItem("token")) { // || !this.authService.isAuthenticated()
      this.router.navigate(['login']);
      return false;

    } else {

      // jagain role seller dan buyer biar tidak nyebrang URL
      this.myToken =  this.authService.decrypt(localStorage.getItem('token'))

      // Split the string by '-' to separate different parts
      const tokenParts = this.myToken.split('-');
  
      // Extract the "Buyer" value (assuming it's always the last part)
      const buyerValue = tokenParts[tokenParts.length - 1];
  
      var a = window.location.pathname.split('/');
      this.urlSplit =  a[1]
      // console.log(this.urlSplit);

      //protect seller dashboard from buyer access 
      if(buyerValue == 'Buyer' && this.urlSplit == 'seller'){
        this.router.navigate(['not-found']);
        return false;
      } 
    }
    return true;
  }
}