import { CanActivateFn } from '@angular/router';
import { StoreSessionService } from '../service/store-session.service';

export const authAdminGuard: CanActivateFn = (route, state) => {
  const sessionStore = new StoreSessionService();
  const userRole = sessionStore.getSessionItemRole();
  
  if (userRole == "admin"){
    return true;
  }else{
    return false;
  }
  
};
