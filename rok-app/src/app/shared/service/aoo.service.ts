import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IAoo } from '../interface/aoo';

@Injectable({
  providedIn: 'root'
})

export class AooService {
  AOOURL: string = "http://localhost:8000/api/";
  constructor(private http: HttpClient) { 
    
  }
  
  /**
   * get aoo hold title list
   */
  getAooHoldList(): Observable<IAoo[]>{
    return this.http.get<IAoo[]>(this.AOOURL + "aoo/")
    .pipe();
  }
  /**
   * 
   * @param body 
   * @returns 
   */
  postAooHold(item:string): Observable<IAoo[]>{
    type requestBody = {"title": string};
    let body: requestBody = {"title": item};
    return this.http.post<IAoo[]>(this.AOOURL + "aoo/", body).pipe();
  }

  deleteAooHold(pk:string): Observable<IAoo[]>{
    return this.http.delete<IAoo[]>(this.AOOURL + "aoo/" + pk).pipe();
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
