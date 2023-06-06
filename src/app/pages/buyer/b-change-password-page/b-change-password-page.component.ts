import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-b-change-password-page',
  templateUrl: './b-change-password-page.component.html',
  styleUrls: ['./b-change-password-page.component.scss']
})
export class BChangePasswordPageComponent implements OnInit {
  id_url = String(this.route.snapshot.params.id);
  submitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService : AuthService,
  ) { }

  updatePasswordForm = new FormGroup({
    password : new FormControl('', Validators.required),
    id : new FormControl('', Validators.required),
  })

  ngOnInit(): void {
  }

  onUpdatePassword() {
    this.submitted = true;
    if (this.updatePasswordForm.invalid) {
      return;
    } else {

      console.log('oke');
    }

    this.authService.updateUserData(this.id_url, this.updatePasswordForm.value)
    .subscribe(
      res => {
        alert('Password updated')
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
      }
    )
  }

}