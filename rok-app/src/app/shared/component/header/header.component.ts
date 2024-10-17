import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';

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
  loginState: boolean = true;
  clickSidenavToggle(): void{
    this.sidenavToggle.emit();
    this.sidenavSwitch = !this.sidenavSwitch;
  }
}
