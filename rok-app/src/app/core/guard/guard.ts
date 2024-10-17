import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../service/auth.service";


export const authGuard: CanActivateFn = () => {
    // 認証管理サービスのinject
    const authService = inject(AuthService);
    // Routerのinject
    const router = inject(Router);
    if (authService.isAuthenticated()) {
      // 認証済みのため（認証後画面への）ナビゲーションOK
      return true;
    } else {
      // 認証未済のため認証ページに飛ばす
      return router.parseUrl('auth');
    }
  };