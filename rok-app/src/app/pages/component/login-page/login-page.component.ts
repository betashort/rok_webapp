import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/service/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  formUserInfo = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  user = '';
  errorMessage = '';
  constructor(private authService: AuthService) {}
  login() {
    const userName = this.formUserInfo.value.userName as string;
    const password = this.formUserInfo.value.password as string;

    this.authService
      .login(userName, password);

    // this.authService.login(userName, password).subscribe({
    //   next: (data) => {},
    //   error: (error) => { console.log(error)},
    // });
  }
}
