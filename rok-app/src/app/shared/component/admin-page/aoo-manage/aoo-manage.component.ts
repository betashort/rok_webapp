import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
/* Angular Material*/
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
/* Own Material */
import { IAoo } from '../../../interface/aoo';
import { AooService } from '../../../service/aoo.service';

@Component({
  selector: 'app-aoo-manage',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
  ],
  templateUrl: './aoo-manage.component.html',
  styleUrl: './aoo-manage.component.scss'
})


export class AooManageComponent {
  formAooHold = new FormGroup({
    title: new FormControl(''),
  });
  aooHoldList?: IAoo[];

  constructor(private aooService: AooService) {}

  ngOnInit() {
    this.getAooList();
  }
  /**
   * 
   */
  getAooList(): void {
    this.aooService.getAooHoldList().subscribe({
      next: (data: IAoo[]) => {
        this.aooHoldList = data;
      },
      error: (fail: any) => {
        console.log(fail);
      },
    });
  }
  /**
   * 
   */
  submitAooHold(): void {
    if (this.formAooHold.value.title != '') {
      if (this.formAooHold.value.title != undefined) {
        this.aooService.postAooHold(this.formAooHold.value.title).subscribe({
          next: (data: IAoo[]) => {
            console.log(JSON.stringify(data));
            this.getAooList();
          },
          error: (fail: any) => {
            console.log(fail);
          },
        });
      }
    }
    this.getAooList();
  }
  /**
   * 
   */
  deleteAooHold(pk: string): void {
    this.aooService.deleteAooHold(pk).subscribe({
      next: (data: IAoo[]) => {
        console.log(JSON.stringify(data));
        this.getAooList();
      },
      error: (fail: any) => {
        console.log(fail);
      },
    });
    
  }

}
