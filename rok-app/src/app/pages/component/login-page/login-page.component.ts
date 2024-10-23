import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/service/auth.service';
import { sha256 } from '../../../core/utils/hash256';
import { Router } from '@angular/router';

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
  constructor(private authService: AuthService, private router:Router) {}
  async login() {
    const userName = this.formUserInfo.value.userName as string;
    const password = this.formUserInfo.value.password as string;
    //Hash
    // const passwordHash = await sha256(password).then((p) => {
    //   return p;
    // });
    this.authService.login(userName, password).subscribe({
      next: (response) => {
        this.router.navigate(['/dashboard-page']);
      },
      error: (error) => {
        this.errorMessage = error.status;
        console.log(this.errorMessage);
      },
    });
  }

  logout(){
    this.authService.logout().subscribe({
      next: (response) => {},
      error: (error) => {}
    });
  }
}
