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
/**
 * Own Material
 */
import { IAoo, IAooMember } from '../../../shared/interface/aoo';
import { AooService } from '../../../shared/service/aoo.service';
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
  ],
  templateUrl: './aoo-teamboard-page.component.html',
  styleUrl: './aoo-teamboard-page.component.scss',
})
export class AooTeamboardPageComponent {
  //selecter's data
  roles: String[] = ['北', '棺', '南'];
  teleportAreas: String[] = ['初回 北', '北', '初回 南', '南'];
  //UserAooInfo FormGroup
  selectedAoo!: FormControl;
  aooHoldList: IAoo[] = [];
  aooMemberList: IAooMember[] = []
  displayedColumns: string[] = ['user_name', 'user_position', 'user_role', 'user_description'];
 
  constructor(private aooService: AooService) {
    this.selectedAoo = new FormControl('', [Validators.required])
  }

  ngOnInit(): void {
    //Create FormGroup
    //getting sessionStrage
    this.getSessionItemsTeleportArea();
    this.getAooList();
  }
  ngOnDestroy(): void {
    //saving sessionStrage
    this.saveSessionItemsTeleportArea();
  }

  ngDoCheck(): void {}

  updateMemberlist(){
    let aoo_id:string = this.selectedAoo.value;
    this.aooService.getAooMembersList(aoo_id).subscribe({
      next: (data: IAooMember[]) => {
        this.aooMemberList = data;
      },
      error: (fail: any) => {
        console.log(fail);
      }
    })
  }

  saveMemberlist(){
    this.aooMemberList;
  }

  getAooList() {
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
   * get Drag&Drop list from sessionStrange
  */
  getSessionItemsTeleportArea(): void {
    try {
      const aooMemberListObjStr = sessionStorage.getItem(
        'userTeleportAreaListObj'
      );
      if (aooMemberListObjStr != null) {
        this.aooMemberList = JSON.parse(aooMemberListObjStr);
      } else {
        console.log('null object');
      }
    } catch {
      console.log('no object');
    }
  }
  /**  
   * save Drag&Drop list to sessionStrage
  */
  saveSessionItemsTeleportArea(): void {
    try {
      sessionStorage.setItem(
        'userTeleportAreaListObj',
        JSON.stringify(this.aooMemberList)
      );
    } catch {
      console.log('no object');
    }
  }

  /**
   * When emitting unload Event
   */
  @HostListener('window:unload', ['$event'])
  unloadHandler(event: any) {
    let a: string = 'ハンドラーunloadHandler';
    console.log(a);
    this.saveSessionItemsTeleportArea();
  }
  /**
   * When emitting loading Event
   * @param  
   */
  @HostListener('window:load', ['$event'])
  loadHandler(event: any) {
    let a: string = 'ハンドラーloadHandler';
    console.log(a);
    this.getSessionItemsTeleportArea();
  }

}
