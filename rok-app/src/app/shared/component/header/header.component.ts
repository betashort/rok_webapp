import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { StoreSessionService } from '../../../core/service/store-session.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,
    MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() sidenavToggle = new EventEmitter();
  sidenavSwitch: boolean = true;
  loginState: boolean = false;

  constructor(private router: Router, private sessionStore: StoreSessionService){

  }

  ngDoCheck() {
    const userRole = this.sessionStore.getSessionItemRole();
    if (userRole !== "error") {
      this.loginState = true;
    }else{
      this.loginState = false;
    }

  }
  clickSidenavToggle(): void{
    this.sidenavToggle.emit();
    this.sidenavSwitch = !this.sidenavSwitch;
  }

  logout():void {
    this.sessionStore.deleteSessionItemRole();
    this.router.navigate(['/dashboard-page']);
  }
}
