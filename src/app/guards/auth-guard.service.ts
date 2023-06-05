import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(
    private authService : AuthService,
    public router: Router
  ) {}

  canActivate(): boolean {
    if (!localStorage.getItem("token")) { // || !this.authService.isAuthenticated()
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}