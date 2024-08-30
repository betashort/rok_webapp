import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UrlConst,PAGEURLS, PageUrlPair } from 'src/app/pages/constants/url-const';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  menuList:PageUrlPair[] = PAGEURLS;
  constructor() { }

  ngOnInit(): void {
  }

  /**
  * Clicks home
  */
  public clickHome(): void {
    this.sidenavClose.emit();
  }
}
