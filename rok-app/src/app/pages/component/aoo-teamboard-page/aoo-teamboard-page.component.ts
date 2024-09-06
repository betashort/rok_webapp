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

import { MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-aoo-teamboard-page',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './aoo-teamboard-page.component.html',
  styleUrl: './aoo-teamboard-page.component.scss'
})
export class AooTeamboardPageComponent {
  //selecter's data
  roles: String[] = [
    "北",
    "棺",
    "南",
  ];
  teleportAreas: String[] = [
    "初回 北",
    "北",
    "初回 南",
    "南"
  ];

  selectedUserAooInfo!: FormGroup;
  // selectedUserAooInfo: IUserAooInfo = {
  //   userName: "",
  //   userRole: "",
  //   userTeleportArea: "",
  //   userRoleDetail: ""
  // };
  // userAooInfos: IUserAooInfo[] = [];

  // selectedUserName: string = "";
  // selectedUserRole: string = "";
  // selectedUserTeleportArea: string = "";
  // selectedUserRoleDetail: string = "";

  todo: string[] = [];
  doing: string[] = []
  done: string[] = [];



  constructor() {
  }

  ngOnInit(): void {
    this.selectedUserAooInfo = new FormGroup({
      userName: new FormControl(''),
      userRole: new FormControl(''),
      userTeleportArea: new FormControl(''),
      userRoleDetail: new FormControl(''),
    });

    this.getSessionItemsTeleportArea();
  }
  ngOnDestroy(): void {
    this.saveSessionItemsTeleportArea();
  }

  ngDoCheck(): void {

  }

  add() {
    console.log(JSON.stringify(this.selectedUserAooInfo.value))
    switch (this.selectedUserAooInfo.value.userRole) {
      case '北':
        this.todo.push(this.selectedUserAooInfo.value.userName);
        break;
      case '棺':
        this.doing.push(this.selectedUserAooInfo.value.userName);
        break;
      case '南':
        this.done.push(this.selectedUserAooInfo.value.userName);
        break;
      default:
        break;
    }
  }
  clearListItem(clearItem: string, area: string): void {
    switch (area) {
      case 'north':
        let tmpTodo: string[] = this.todo;
        this.todo = tmpTodo.filter((item) => item !== clearItem);
        break;
      case 'arc':
        let tmpDoing: string[] = this.todo;
        this.doing = tmpDoing.filter((item) => item !== clearItem);
        break;
      case 'south':
        let tmpDone: string[] = this.todo;
        this.done = tmpDone.filter((item) => item !== clearItem);
        break;
      default:
        break;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  /** */
  getSessionItemsTeleportArea(): void {
    try {
      const userTeleportAreaListObjStr = sessionStorage.getItem('userTeleportAreaListObj');
      if (userTeleportAreaListObjStr != null) {
        const userTeleportAreaListObj = JSON.parse(userTeleportAreaListObjStr);
        this.todo = userTeleportAreaListObj.north;
        this.doing = userTeleportAreaListObj.arc;
        this.done = userTeleportAreaListObj.south;
      } else {
        console.log('null object');
      }

    } catch {
      console.log('no object');
    }
  }
  /**  */
  saveSessionItemsTeleportArea(): void {
    try {
      const userTeleportAreaListObj = {
        north: this.todo,
        arc: this.doing,
        south: this.done,
      };
      sessionStorage.setItem('userTeleportAreaListObj', JSON.stringify(userTeleportAreaListObj));

    } catch {
      console.log('no object');
    };
  };

  @HostListener("window:unload", ["$event"])
  unloadHandler(event: any) {
    let a: string = "ハンドラーunloadHandler";
    console.log(a);
    this.saveSessionItemsTeleportArea();
  }

  @HostListener("window:load", ["$event"])
  loadHandler(event: any) {
    let a: string = "ハンドラーloadHandler";
    console.log(a);
    this.getSessionItemsTeleportArea();
  }

  //entries = window.performance.getEntriesByType("navigation");

}
