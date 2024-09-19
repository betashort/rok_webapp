import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
/**
 * Angular Material
 */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
/**
 * Own meterial
 */
import { AooService } from '../../../shared/service/aoo.service';
import { IAoo, IAooResister } from '../../../shared/interface/aoo';


@Component({
  selector: 'app-aoo-register-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './aoo-register-page.component.html',
  styleUrl: './aoo-register-page.component.scss',
})
export class AooRegisterPageComponent {
  //User Register Infomation
  formUserAooRegisterInfo = new FormGroup({
    aooTitle: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    userParticipation: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  userAooRegisterInfo?: IAooResister;
  aooTitle: string = '';
  userName: string = '';
  userParticipation: boolean = false;
  password: string = '';
  aooHoldList?: IAoo[];
  constructor(private aooService: AooService) {}

  ngOnInit() {
    this.getAooList();
  }
  submitAooRegister(): void {
    this.aooTitle = this.formUserAooRegisterInfo.value.aooTitle as string;
    this.userName = this.formUserAooRegisterInfo.value.userName as string;
    this.userParticipation = this.strToBoolean(this.formUserAooRegisterInfo.value.userParticipation as string);
    this.password = this.formUserAooRegisterInfo.value.password as string;
    
    this.userAooRegisterInfo = {
      aoo_id: this.aooTitle,
      user_name: this.userName,
      user_participation: this.userParticipation,
      password: this.password,
    };

    this.aooService.postAooMember(this.userAooRegisterInfo).subscribe({
      next: (data: IAooResister[]) => {
        console.log(JSON.stringify(data));
      },
      error: (fail: any) => {
        console.log(fail);
      }
    })
  }

  getAooList() {
    this.aooService.getAooHoldList().subscribe({
      next: (data: IAoo[]) => {
        this.aooHoldList = data;
      },
      error: (fail: any) => {
        console.log(fail);
      },
    });
  }

  strToBoolean(tmp: string): boolean{
    return tmp === "true"
  }
    //   this.aooService.getAooHoldList().subscribe(
    //     (response) => {
    //       console.log(response)
    //     },
    //     (error) => {
    //       console.error(error);
    //     }

    // )
    // let aooHoldList = async () =>{
    //   let res = await this.aooService.getAooHoldList();
    //   this.a = res;
    //   console.log(res);
    //   console.log(this.a)
    // }
    // aooHoldList();
}
