import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


//const AUTH_API = 'http://localhost:8000/api/auth/';
const AUTH_API = 'https://rok-api.betashort-lab.com/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signin(userName: string, password: string) {
    // let hash = sha256(password);
    // let passwordHash = await hash.then((b) => {
    //   return b;
    // });
    // const passwordHash = sha256(password);
    // console.log(passwordHash);

    return this.http
      .post(AUTH_API + 'signin', { userName, password }, httpOptions)
      .pipe();
  };

  login(userName: string, password: string) {
    // let hash = sha256(password);
    // let passwordHash = await hash.then((b) => {
    //   return b;
    // });
    // const passwordHash = sha256(password);
    // console.log(passwordHash);
    const body = {
      "user_name": userName,
      "password" : password,
    }
    return this.http
      .post(AUTH_API + 'login/', body, httpOptions)
      .pipe();
  }

  logout() {
    return this.http.post(AUTH_API + 'logout', {}, httpOptions).pipe();
  }
}
