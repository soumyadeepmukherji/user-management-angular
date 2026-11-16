import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-login',
  standalone: false,
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login implements OnInit{

  loginForm!: FormGroup

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toaster: ToastService){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userID: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8), Validators.maxLength(10)]]
    })
  }

  onLogin(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched()
      return
    }

    const {userID,password} = this.loginForm.value

    const isValid = this.auth.login(userID,password)

    if(isValid){
      this.toaster.successLogin()
      this.router.navigate(['/users'])
    }
    else{
      this.toaster.loginFailed()
    }
  }
}
