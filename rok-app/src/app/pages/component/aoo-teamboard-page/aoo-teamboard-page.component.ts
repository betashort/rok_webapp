import { Component, HostListener } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-aoo-teamboard-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
  ],
  templateUrl: './aoo-teamboard-page.component.html',
  styleUrl: './aoo-teamboard-page.component.scss',
})
export class AooTeamboardPageComponent {
  //selecter's data
  roles: String[] = ['北', '棺', '南'];
  teleportAreas: String[] = ['初回 北', '北', '初回 南', '南'];
  //UserAooInfo FormGroup
  selectedUserAooInfo!: FormGroup;
  //Drag&Drop's List Data
  north: string[] = [];
  arc: string[] = [];
  south: string[] = [];

  constructor() {}

  ngOnInit(): void {
    //Create FormGroup
    //getting sessionStrage
    this.getSessionItemsTeleportArea();

  }
  ngOnDestroy(): void {
    //saving sessionStrage
    this.saveSessionItemsTeleportArea();
  }

  ngDoCheck(): void {}

  // add userInfo -> Drag&Drop List
  add() {
    console.log(JSON.stringify(this.selectedUserAooInfo.value));
    switch (this.selectedUserAooInfo.value.userRole) {
      case '北':
        this.north.push(this.selectedUserAooInfo.value.userName);
        break;
      case '棺':
        this.arc.push(this.selectedUserAooInfo.value.userName);
        break;
      case '南':
        this.south.push(this.selectedUserAooInfo.value.userName);
        break;
      default:
        break;
    }
  }
  // Clear userInfo
  clearListItem(clearItem: string, area: string): void {
    switch (area) {
      case 'north':
        let tmpTodo: string[] = this.north;
        this.north = tmpTodo.filter((item) => item !== clearItem);
        break;
      case 'arc':
        let tmpDoing: string[] = this.arc;
        this.arc = tmpDoing.filter((item) => item !== clearItem);
        break;
      case 'south':
        let tmpDone: string[] = this.south;
        this.south = tmpDone.filter((item) => item !== clearItem);
        break;
      default:
        break;
    }
  }
  
  updateMemberlist(){

  }
  /**
   * drag&Drop function
   * change previous to current item
   * */
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  /** 
   * get Drag&Drop list from sessionStrange
  */
  getSessionItemsTeleportArea(): void {
    try {
      const userTeleportAreaListObjStr = sessionStorage.getItem(
        'userTeleportAreaListObj'
      );
      if (userTeleportAreaListObjStr != null) {
        const userTeleportAreaListObj = JSON.parse(userTeleportAreaListObjStr);
        this.north = userTeleportAreaListObj.north;
        this.arc = userTeleportAreaListObj.arc;
        this.south = userTeleportAreaListObj.south;
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
      const userTeleportAreaListObj = {
        north: this.north,
        arc: this.arc,
        south: this.south,
      };
      sessionStorage.setItem(
        'userTeleportAreaListObj',
        JSON.stringify(userTeleportAreaListObj)
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
