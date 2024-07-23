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

@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    ResultFormComponent,
    StatusFormComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule, MatFormFieldModule, MatInputModule
  ],
  exports: [HeaderComponent, FooterComponent, SidenavComponent]
})
export class SharedModule { }
