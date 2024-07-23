import { Component } from '@angular/core';
import { UrlConst } from './pages/constants/url-const';
import { RoutingService } from './core/services/routing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ROK Application';

  constructor(private routingService: RoutingService){}

  /**
   * Determines whether sign in page is displayed
   * @returns true if sign in page
   */
  // public isSignInPage(): boolean{
  //   if(UrlConst.SLASH === this.routingService.router.url){
  //     return true;
  //   }
  //   if(UrlConst.SLASH + UrlConst.PATH_SIGN_IN === this.routingService.router.url){
  //     return true;
  //   }
  //   return false;
  // }
}
