import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() sidenavToggle = new EventEmitter();

  clickSidenav(): void{
    this.sidenavToggle.emit();
  }
}
