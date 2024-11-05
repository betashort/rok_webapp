import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IAoo, IAooMember, IAooResister } from '../interface/aoo';

@Injectable({
  providedIn: 'root'
})

export class AooService {
  AOOURL: string = "http://localhost:8000/api/";
  //AOOURL: string = "https://rok-api.betashort-lab.com/api/";
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

  postAooMember(body: IAooResister){
    return this.http.post<IAooResister[]>(this.AOOURL + "aoo/register/", body).pipe();
    
  }

  getAooMembersList(aoo_id:string): Observable<IAooMember[]>{
    return this.http.get<IAooMember[]>(this.AOOURL + "aoo/member/" + aoo_id)
    .pipe();
  }
}
