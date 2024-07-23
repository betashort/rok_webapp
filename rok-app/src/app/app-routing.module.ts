import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/component/dashboard-page/dashboard-page.component';
import { ResultRegisterPageComponent } from './pages/component/result-register-page/result-register-page.component';
import { SignInPageComponent } from './pages/component/sign-in-page/sign-in-page.component';
import { UrlConst } from './pages/constants/url-const';
import { SpeedupCalculatorComponent } from './pages/component/speedup-calculator/speedup-calculator.component';
import { ResourceCalculatorComponent } from './pages/component/resource-calculator/resource-calculator.component';

const routes: Routes = [
  {path: '', redirectTo: UrlConst.SLASH + UrlConst.PATH_DASHBOARD, pathMatch: 'full'},
  {path: UrlConst.PATH_DASHBOARD, component:DashboardPageComponent},
  {path: UrlConst.PATH_SIGN_IN, component: SignInPageComponent},
  {path: UrlConst.PATH_RESULT_REGISTER_FORM, component: ResultRegisterPageComponent},
  {path: UrlConst.PATH_SPEEDUP_CALCULATOR, component: SpeedupCalculatorComponent},
  {path: UrlConst.PATH_RESOURCE_CALCULATOR, component: ResourceCalculatorComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
