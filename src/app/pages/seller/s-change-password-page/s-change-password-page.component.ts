import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-s-change-password-page',
  templateUrl: './s-change-password-page.component.html',
  styleUrls: ['./s-change-password-page.component.scss']
})
export class SChangePasswordPageComponent implements OnInit {
  id_url = String(this.route.snapshot.params.id);
  submitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService : AuthService,
  ) { }

  updatePasswordForm = new FormGroup({
    password : new FormControl('', Validators.required),
    id : new FormControl(this.id_url, Validators.required),
  })

  ngOnInit(): void {
  }

  onUpdatePassword() {
    this.submitted = true;
    if (this.updatePasswordForm.invalid) {
      return;
    }

    let encryptPassword = this.authService.encrypt(this.updatePasswordForm.value.password);

    this.updatePasswordForm.patchValue({  
      password: encryptPassword
    })

    this.authService.updateUserData(this.id_url, this.updatePasswordForm.value)
    .subscribe(
      res => {
        alert('Password updated')
        this.onLogout()
      },
      err => {
        console.log(err);
      }
    )
  }

  onLogout() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }

}
