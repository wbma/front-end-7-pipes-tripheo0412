import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { LoginComponent } from './login/login.component';

/**
 * https://angular.io/guide/router
 */
const routes: Routes = [
  {
    path: '',
    component: FrontComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
