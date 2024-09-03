import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ResultFormComponent } from './component/result-form/result-form.component';
import { StatusFormComponent } from './component/status-form/status-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { AooRegisterFormComponent } from './component/aoo-register-form/aoo-register-form.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    ResultFormComponent,
    StatusFormComponent,
    AooRegisterFormComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatRadioModule, 
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    AppRoutingModule
  ],
  exports: [HeaderComponent, FooterComponent, SidenavComponent, ResultFormComponent, StatusFormComponent, AooRegisterFormComponent]
})
export class SharedModule { }
