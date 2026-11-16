import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainUser } from './components/main-user/main-user';

const routes: Routes = [
  {
    path: '',
    component: MainUser
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
