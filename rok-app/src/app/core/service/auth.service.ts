import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { sha256 } from '../utils/hash256';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8000/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  
  login(userName: string, password: string) {
    let hash = sha256(password);
    // let passwordHash = await hash.then((b) => {
    //   return b;
    // });
    let passwordHash = sha256(password);
    console.log(passwordHash);

    return this.http.post(
      AUTH_API + 'signin',
      { userName, passwordHash },
      httpOptions
    );
  }

  logout() {
    return this.http.post(AUTH_API + 'signout', {}, httpOptions);
  }
}
