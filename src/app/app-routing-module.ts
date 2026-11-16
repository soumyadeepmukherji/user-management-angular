import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { AuthGuard } from './core/guards/auth-guard';

const routes: Routes = [
  {
    path: 'login',
    component: Login
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
