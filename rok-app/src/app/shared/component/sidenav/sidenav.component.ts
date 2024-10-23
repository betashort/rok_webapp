import { Component, EventEmitter, Output } from '@angular/core';
import { IPageUrlPair, PAGEURLS } from '../../../pages/const/urls';
import { RouterLink } from '@angular/router';
import { StoreSessionService } from '../../../core/service/store-session.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  urls:IPageUrlPair[] = PAGEURLS;
  userRole = ""
  constructor(private sessionStore: StoreSessionService ){}
  
  ngOnInit(){
    this.userRole = this.sessionStore.getSessionItemRole();
  }

  ngDoCheck(){
    this.userRole = this.sessionStore.getSessionItemRole();
  }

}
