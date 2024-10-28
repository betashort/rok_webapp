import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { IAoo } from '../../../shared/interface/aoo';
import { MatIconModule } from '@angular/material/icon';
import { AooService } from '../../../shared/service/aoo.service';
import {MatTabsModule} from '@angular/material/tabs';
import { AooManageComponent } from "../../../shared/component/admin-page/aoo-manage/aoo-manage.component";
import { KvkManageComponent } from "../../../shared/component/admin-page/kvk-manage/kvk-manage.component";
import { UserManageComponent } from "../../../shared/component/admin-page/user-manage/user-manage.component";

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    AooManageComponent,
    KvkManageComponent,
    UserManageComponent
],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss',
})
export class AdminPageComponent {
}
