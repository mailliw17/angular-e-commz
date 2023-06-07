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
  uuid = uuid.v4()
  submitted = false;
  registerForm : FormGroup

  constructor(
    private authService : AuthService,
    private router: Router
  ) { }

 

  ngOnInit(): void {
    // let token = this.authService.encrypt()
    this.registerForm = new FormGroup({
      id : new FormControl(this.uuid, Validators.required),
      name : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', Validators.required),
      address : new FormControl('', Validators.required),
      phone_number : new FormControl('', Validators.required),
      role : new FormControl('', Validators.required),
      created_on : new FormControl(new Date(), Validators.required)
    })
  }

  onRegister() {

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    let encryptPassword = this.authService.encrypt(this.registerForm.value.password);


    this.registerForm.patchValue({  
      password: encryptPassword
    })

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
