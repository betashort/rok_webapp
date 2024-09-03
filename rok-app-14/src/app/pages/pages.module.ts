import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './component/sign-in-page/sign-in-page.component';
import { DashboardPageComponent } from './component/dashboard-page/dashboard-page.component';
import { ResultRegisterPageComponent } from './component/result-register-page/result-register-page.component';

import { ResourceCalculatorComponent } from './component/resource-calculator/resource-calculator.component';
import { SpeedupCalculatorComponent } from './component/speedup-calculator/speedup-calculator.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AooRegisterPageComponent } from './component/aoo-register-page/aoo-register-page.component';
import { AooAdminPageComponent } from './component/aoo-admin-page/aoo-admin-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  DragDropModule
} from '@angular/cdk/drag-drop'
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    SignInPageComponent,
    DashboardPageComponent,
    ResultRegisterPageComponent,
    ResourceCalculatorComponent,
    SpeedupCalculatorComponent,
    AooRegisterPageComponent,
    AooAdminPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatIconModule
  ]
})
export class PagesModule { }
