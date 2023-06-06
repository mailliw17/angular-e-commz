import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  

  constructor(
    private router: Router,
    private toast: ToastrService,
    private authService : AuthService
  ) { }

  submitted = false;
  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', Validators.required)
  })

  ngOnInit(): void {
   
  }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    
    this.authService.getUserByEmail(this.loginForm.value.email)
    .subscribe(
      res => {
        if (!res.length)
          return this.toast.error('Email / Password is Incorect', 'Auth Error');
        if (res[0].password !== this.loginForm.value.password)
          return this.toast.error('Email / Password is Incorect', 'Auth Error');
        
        let token = this.authService.encrypt(`${res[0].id}-${res[0].email}-${res[0].name}-${res[0].address}-${res[0].role}`);
        localStorage.setItem('token', token);
        
        if (res[0].role === 'Buyer')
          this.router.navigate(['/'])
        if (res[0].role === 'Seller')
          this.router.navigate(['/seller/dashboard'])
          
        return this.toast.success('Logged In', 'Success');
      },
      err => {
        console.log(err);
      }
    )
  }

  ngOnDestroy(): void {
    this.submitted = false;
    this.loginForm.reset();
  }
}
