import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { UsersModule } from './features/users/users-module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatToastModule } from 'ngx-mat-toast';
import { AuthModule } from './features/auth/auth.module';
import { DashboardModuleModule } from './features/dashboard/dashboard.module-module';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    AuthModule,
    HttpClientModule,
    NgxMatToastModule.forRoot({
      duration: 3000,
      progressBar: true,
      preventDuplicates: true,
      position: {
        horizontal: 'end',
        vertical: 'top',
      },
    }),
    DashboardModuleModule,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
