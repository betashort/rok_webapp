import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './component/sign-in-page/sign-in-page.component';
import { DashboardPageComponent } from './component/dashboard-page/dashboard-page.component';
import { ResultRegisterPageComponent } from './component/result-register-page/result-register-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ResourceCalculatorComponent } from './component/resource-calculator/resource-calculator.component';
import { SpeedupCalculatorComponent } from './component/speedup-calculator/speedup-calculator.component';


@NgModule({
  declarations: [
    SignInPageComponent,
    DashboardPageComponent,
    ResultRegisterPageComponent,
    ResourceCalculatorComponent,
    SpeedupCalculatorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatTableModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class PagesModule { }
