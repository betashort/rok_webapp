import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //clicks sidenav and throw event
  @Output() sidenavToggle = new EventEmitter();
  //get menuList
  

  constructor(
    private routingService : RoutingService
  ) { }

  ngOnInit(): void {
  }

  /**
   * Clicks toggle sidenav
   */
  clickSidenav(): void{
    this.sidenavToggle.emit();
  }

  /**
   * clicks sign out
   */
  clickSignOut(): void{

  }
  

}
