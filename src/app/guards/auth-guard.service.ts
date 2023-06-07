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

    this.authService.getUserByToken()
    .subscribe( 
      res => {
        console.log(res);
        console.log(routeSnap.data.role);
          if (routeSnap.data.role !== res[4]) {
            this.router.navigate(['not-found']);
            return false;
          }
      },
      err => {
        console.log(err);
      }
    )

    return true;
  }
}