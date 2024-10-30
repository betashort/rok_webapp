import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/service/auth.service';
import { sha256 } from '../../../core/utils/hash256';
import { Router,RouterLink } from '@angular/router';
import { StoreSessionService } from '../../../core/service/store-session.service';

interface responseRole {
  "role": string;
};

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
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
  constructor(
    private authService: AuthService,
    private router: Router,
    private sessionService: StoreSessionService
  ) {}
  async login() {
    const userName = this.formUserInfo.value.userName as string;
    const password = this.formUserInfo.value.password as string;
    //Hash
    // const passwordHash = await sha256(password).then((p) => {
    //   return p;
    // });
    this.authService.login(userName, password).subscribe({
      next: (response) => {
        console.log();
        this.sessionService.saveSessionItemRole(JSON.stringify(response))
        this.router.navigate(['/dashboard-page']);
        const role = this.sessionService.getSessionItemRole();
        console.log(role)
      },
      error: (error) => {
        this.errorMessage = error.status;
        console.log(this.errorMessage);
      },
    });
  }

  logout() {
    this.authService.logout().subscribe({
      next: (response) => {},
      error: (error) => {},
    });
  }
}
