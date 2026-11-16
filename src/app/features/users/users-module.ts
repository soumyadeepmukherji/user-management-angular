import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing-module';
import { UserList } from './components/user-list/user-list';
import { UserForm } from './components/user-form/user-form';
import { MaterialModule } from '../../shared/material/material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainUser } from './components/main-user/main-user';

@NgModule({
  declarations: [UserList, UserForm, MainUser],
  imports: [CommonModule, UsersRoutingModule, MaterialModule, ReactiveFormsModule],
  exports: [UserForm, UserList],
})
export class UsersModule {}
