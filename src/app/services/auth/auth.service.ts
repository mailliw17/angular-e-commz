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

  postUser(data : any) {
    return this.http.post<any>(BASE_URL, data)
  } 

  getUserById(id: String) {
    return this.http.get<any>(BASE_URL +'/' + id)
  }
}
