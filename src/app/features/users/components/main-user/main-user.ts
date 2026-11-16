import { Component } from '@angular/core';
import { AuthService } from '../../../../core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-user',
  standalone: false,
  styleUrl: './main-user.css',
  templateUrl: './main-user.html',
})
export class MainUser {
  constructor(private auth: AuthService, private router: Router){}

  logout(){
    this.auth.logOut()
    this.router.navigate(['/login'])
  }
}
