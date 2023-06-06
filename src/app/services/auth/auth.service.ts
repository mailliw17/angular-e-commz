import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  getUserDetailFromToken():Observable<any[]> {
    var dataUser =  this.decrypt(localStorage.getItem("token"))

    // Find the index of the first occurrence of '|'
    var splitTheUserData = dataUser.split('|');

    return of(splitTheUserData)

    // this is the index info 
    // [0] id
    // [1] email
    // [2] name
    // [3] address
    // [4] role
  }
}
