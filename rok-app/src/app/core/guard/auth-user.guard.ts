import { CanActivateFn } from '@angular/router';
import { StoreSessionService } from '../service/store-session.service';

export const authUserGuard: CanActivateFn = (route, state) => {
  const sessionStore = new StoreSessionService();
  const userRole = sessionStore.getSessionItemRole();
  
  if (userRole == "admin" || userRole == "user"){
    return true;
  }else{
    return false;
  }
};
