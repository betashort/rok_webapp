import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-aoo-register-page',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule

  ],
  templateUrl: './aoo-register-page.component.html',
  styleUrl: './aoo-register-page.component.scss'
})
export class AooRegisterPageComponent {
  userAooRegisterInfo = new FormGroup({
    userName: new FormControl(''),
    userParticipation: new FormControl(''),
  });

}
