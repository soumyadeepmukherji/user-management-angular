import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { AuthGuard } from './core/guards/auth-guard';
import { Register } from './features/auth/register/register';
import { authRedirectGuard } from './core/guards/auth-redirect-guard';

const routes: Routes = [
  {
    path: 'login',
    component: Login,
    canActivate: [authRedirectGuard]
  },
  {
    path: 'register',
    component: Register,
    canActivate: [authRedirectGuard]
  },
  {
    path: 'users',
    loadChildren: () => 
      import('./features/users/users-module').then(m => m.UsersModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
