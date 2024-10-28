import { Routes } from '@angular/router';
import { Urls } from './pages/const/urls';
import { DashboardComponent } from './pages/component/dashboard/dashboard.component';
import { AooRegisterPageComponent } from './pages/component/aoo-register-page/aoo-register-page.component';
import { AooTeamboardPageComponent } from './pages/component/aoo-teamboard-page/aoo-teamboard-page.component';
import { AdminPageComponent } from './pages/component/admin-page/admin-page.component';
import { KvkRegisterPageComponent } from './pages/component/kvk-register-page/kvk-register-page.component';
import { LoginPageComponent } from './pages/component/login-page/login-page.component';
import { authAdminGuard } from './core/guard/auth-admin.guard';
import { authUserGuard } from './core/guard/auth-user.guard';
import { SignUpPageComponent } from './pages/component/sign-up-page/sign-up-page.component';

export const routes: Routes = [
  { path: '', redirectTo: Urls.SLASH + Urls.PATH_DASHBOARD, pathMatch: 'full' },
  { path: Urls.PATH_LOGIN, component: LoginPageComponent },
  { path: Urls.PATH_SIGN_UP, component: SignUpPageComponent },
  { path: Urls.PATH_DASHBOARD, component: DashboardComponent },
  {
    path: Urls.PATH_AOO_REGISTER,
    component: AooRegisterPageComponent,
    canActivate: [],
  },
  {
    path: Urls.PATH_AOO_TEAMBOARD,
    component: AooTeamboardPageComponent,
    canActivate: [authAdminGuard],
  },
  {
    path: Urls.PATH_ADMIN,
    component: AdminPageComponent,
    canActivate: [authAdminGuard],
  },
  {
    path: Urls.PATH_KVK_REGISTER,
    component: KvkRegisterPageComponent,
    canActivate: [authUserGuard],
  },
];
