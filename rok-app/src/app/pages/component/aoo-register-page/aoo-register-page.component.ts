import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AooService } from '../../../shared/service/aoo.service';
import { Aoo } from '../../../shared/interface/aoo';
import { Observable } from 'rxjs';
import { resolve } from 'path';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-aoo-register-page',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule

  ],
  templateUrl: './aoo-register-page.component.html',
  styleUrl: './aoo-register-page.component.scss'
})
export class AooRegisterPageComponent {
  userAooRegisterInfo = new FormGroup({
    userName: new FormControl(''),
    userParticipation: new FormControl(''),
  });
  userName:string = ""
  userParticipation:string = ""
  a: any;
  aooHoldList?: Observable<Aoo[]>;
  aooTitles: string[] = ["2024/08/13 23:00", "2024/09/07 23:00"];
  constructor(private aooService: AooService){}

  submitAooRegister(): void{
    this.userName = JSON.stringify(this.userAooRegisterInfo.value.userName);
    this.userParticipation = JSON.stringify(this.userAooRegisterInfo.value.userParticipation);
    this.aooService.getAooHoldList().subscribe(
      {
        next: (data:Aoo[]) => {
          let a = data;
          console.log(a);
        },
        error: (fail:any) =>{
          console.log(fail);
        } 
    }
    )
  //   this.aooService.getAooHoldList().subscribe(
  //     (response) => {
  //       console.log(response)
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
      
  // )
    console.log(JSON.stringify(this.aooHoldList))
    // let aooHoldList = async () =>{
    //   let res = await this.aooService.getAooHoldList();
    //   this.a = res;
    //   console.log(res);
    //   console.log(this.a)
    // }
    // aooHoldList();
  }
}
