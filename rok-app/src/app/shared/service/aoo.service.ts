import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Aoo } from '../interface/aoo';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class AooService {

  constructor(private http: HttpClient) { }

  /**
   * get 
   */
  getAooHoldList(): Observable<Aoo[]>{
    return this.http.get<Aoo[]>("http://localhost:8000/api/aoo/")
    .pipe()
  }
  // getAooHoldList(){
  //   return new Promise(( resolve, reject) =>{
  //     fetch("http://localhost:8000/api/aoo/",
  //       {method: "GET"}
  //     )
  //     .then((res) => res.json())
  //     .then((data) => resolve(data));
  //   })
  // }

}
