import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const BASE_URL =
'http://localhost:3000/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  encrypt(string: string) {
    return window.btoa(encodeURIComponent(string));
  }

  decrypt(string: string) {
    return decodeURIComponent(window.atob(string));
  }

  postUser(data : any) {
    return this.http.post<any>(BASE_URL, data)
  }

  getUserByEmail(email: String) {
    return this.http.get<any>(BASE_URL +'?email='+ email)
  }

  getUserById(id: String) {
    return this.http.get<any>(BASE_URL +'/' + id)
  }
  
  updateUserData(id:String, data:any) {
    return this.http.patch(BASE_URL +'/' + id, data)
  }
}
