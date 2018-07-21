import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { SignupComponent } from './screens/signup/signup.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

const routes: Routes = [
  {
   path: 'login',
   component: LoginComponent
  },
  {
   path: 'signup',
   component: SignupComponent
  },
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
