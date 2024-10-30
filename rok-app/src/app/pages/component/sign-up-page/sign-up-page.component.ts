import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';

interface IFormUserInfo{
  userId: string;
  userName: string;
  password: string;
  confirmPassword: string;
};

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss'
})

export class SignUpPageComponent {
  formUserInfo = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });
  
  constructor(
    private authService: AuthService,
    private router: Router,
  ){}

  signUp(){
    const userId = this.formUserInfo.value.userId as string;
    const userName = this.formUserInfo.value.userName as string;
    const passowrd = this.formUserInfo.value.password as string;
    const confirmPassword = this.formUserInfo.value.confirmPassword as string;
    const body:IFormUserInfo = {
      userId: userId,
      userName: userName,
      password: passowrd,
      confirmPassword: confirmPassword
    }
    this.authService.signUp(body)
  }
}
