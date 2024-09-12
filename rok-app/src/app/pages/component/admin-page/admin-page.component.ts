import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { IAoo } from '../../../shared/interface/aoo';
import { MatIconModule } from '@angular/material/icon';
import { AooService } from '../../../shared/service/aoo.service';

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
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss',
})
export class AdminPageComponent {
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
   * @returns
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
