import { Component } from '@angular/core';
import { IPageUrlPair, PAGEURLS } from '../../../pages/const/urls';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  urls:IPageUrlPair[] = PAGEURLS;
}
