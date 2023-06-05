import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-s-profile-page',
  templateUrl: './s-profile-page.component.html',
  styleUrls: ['./s-profile-page.component.scss']
})
export class SProfilePageComponent implements OnInit {
  id_url = String(this.route.snapshot.params.id);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService : AuthService,
  ) { }

  updateProfileForm = new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    phone_number : new FormControl('', Validators.required),
    address : new FormControl('', Validators.required),
    id : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    role : new FormControl('', Validators.required),
    created_on : new FormControl('', Validators.required),
  })

  ngOnInit(): void {
    this.getUserData(this.id_url)
  }

  getUserData(id:String) {
    this.authService.getUserById(id)
    .subscribe(
      res => {
        // console.log(res);

        this.updateProfileForm = new FormGroup({
          name : new FormControl(res['name'], Validators.required),
          email : new FormControl(res['email'], Validators.required),
          phone_number : new FormControl(res['phone_number'], Validators.required),
          address : new FormControl(res['address'], Validators.required),
          id : new FormControl(res['id'], Validators.required),
          password : new FormControl(res['password'], Validators.required),
          role : new FormControl(res['role'], Validators.required),
          created_on : new FormControl(res['created_on'], Validators.required),
        })
      },
      err => {
        console.log(err);
      }
    )
  }

  onUpdateProfile() {
    this.authService.updateUserData(this.id_url, this.updateProfileForm.value)
    .subscribe(
      res => {
        alert('Profile user updated')
        this.router.navigate(['/seller/dashboard']);
      },
      err => {
        console.log(err);
      }
    )
    
  }


}
