import { Component } from '@angular/core';
import { ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
 } from '@angular/forms';

/**
 * Angular Material
 */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-kvk-register-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './kvk-register-page.component.html',
  styleUrl: './kvk-register-page.component.scss'
})
export class KvkRegisterPageComponent {
  //Kill point
  formUserKvkKillPoint = new FormControl('', [Validators.required]);
  //Death point
  formUserKvkDeathPoint = new FormGroup({
    t4Inf: new FormControl(''),
    t4Cav: new FormControl(''),
    t4Arc: new FormControl(''),
    t4Gari: new FormControl(''),
    t5Inf: new FormControl(''),
    t5Cav: new FormControl(''),
    t5Arc: new FormControl(''),
    t5Gari: new FormControl(''),
  });
  //Heal point
  formUserHealPoint = new FormControl('');
  //formUserBarbKillPoint
  formUserBarbsKillPoint = new FormGroup({
    barbs: new FormControl(''),
    forts: new FormControl('')
  })
  
}

