import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * Angular Material
 */
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table'
import { MatTabsModule } from '@angular/material/tabs';

/**
 * Own Material
 */
import { IAoo, IAooMember } from '../../../shared/interface/aoo';
import { AooService } from '../../../shared/service/aoo.service';
import { AooMemberListComponent } from "../../../shared/component/aoo-teamboard/aoo-member-list/aoo-member-list.component";
import { AooFormationComponent } from "../../../shared/component/aoo-teamboard/aoo-formation/aoo-formation.component";
@Component({
  selector: 'app-aoo-teamboard-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    AooMemberListComponent,
    AooFormationComponent
],
  templateUrl: './aoo-teamboard-page.component.html',
  styleUrl: './aoo-teamboard-page.component.scss',
})
export class AooTeamboardPageComponent {

}
