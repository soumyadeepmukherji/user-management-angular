import { NgModule } from '@angular/core';
import { Login } from './login/login';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material-module';
import { Register } from './register/register';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [Login, Register],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule,RouterLink],
  exports: [Login, ReactiveFormsModule,Register],
})
export class AuthModule {}
