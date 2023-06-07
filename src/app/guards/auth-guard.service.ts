import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
  userToken : String[]
  urlSplit : String

  constructor(
    private authService : AuthService,
    public router: Router,
    private route: ActivatedRoute,
  ) {}

  canActivate( routeSnap: ActivatedRouteSnapshot ): boolean {
    if (!localStorage.getItem("token")) {
      this.router.navigate(['login']);
      return false;
    }

    // decrypt token & split by '-'
    this.userToken =  this.authService.decrypt(localStorage.getItem('token')).split('-');
    // extract the Role value
    const userRole = this.userToken[this.userToken.length - 1];

    // validate if the Role is allowed to access url
    if (routeSnap.data.role !== userRole) {
      this.router.navigate(['not-found']);
      return false;
    }

    return true;
  }
}