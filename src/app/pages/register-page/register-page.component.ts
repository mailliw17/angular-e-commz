import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  userModel : User
  uuid = uuid.v4()
  submitted = false;

  constructor(
    private authService : AuthService,
    private router: Router
  ) { }

  registerForm = new FormGroup({
    id : new FormControl(this.uuid, Validators.required),
    name : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', Validators.required),
    address : new FormControl('', Validators.required),
    phone_number : new FormControl('', Validators.required),
    role : new FormControl('', Validators.required),
    created_on : new FormControl(new Date(), Validators.required)
  })

  ngOnInit(): void {
    
  }

  onRegister() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.authService.postUser(this.registerForm.value)
      .subscribe(
        res => {
          alert('Register Success')
          this.router.navigate(['/login']);
        },
        err => {
          console.log(err);
        }
      )
  }

}
