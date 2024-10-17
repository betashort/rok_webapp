import { Injectable } from '@angular/core';
import {sha256} from '../utils/hash256';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  static async login(userName:string, password:string){
    let hash = sha256(password);
    let passwordHash = await hash.then((b) => { return b})
    console.log(passwordHash)
  }
}
