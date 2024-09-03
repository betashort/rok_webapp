import { Routes } from '@angular/router';
import { Urls } from './pages/const/urls';
import { DashboardComponent } from './pages/component/dashboard/dashboard.component';
import { AooRegisterPageComponent } from './pages/component/aoo-register-page/aoo-register-page.component';
import { AooTeamboardPageComponent } from './pages/component/aoo-teamboard-page/aoo-teamboard-page.component';

export const routes: Routes = [
    { path: '', redirectTo: Urls.SLASH + Urls.PATH_DASHBOARD, pathMatch: 'full' },
    { path: Urls.PATH_DASHBOARD, component: DashboardComponent },
    {path: Urls.PATH_AOO_REGISTER, component: AooRegisterPageComponent},
    {path: Urls.PATH_AOO_TEAMBOARD, component: AooTeamboardPageComponent}

];
