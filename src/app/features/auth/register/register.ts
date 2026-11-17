import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { email, validate } from '@angular/forms/signals';
import { passwordMatchValidator } from '../../../shared/validators/passwordMatch.validator';
import { ageValidator } from '../../../shared/validators/age.validators';
import { ErrorStateMatcher } from '@angular/material/core';
import { RegisterService } from '../../../core/services/register.service';
import { ToastService } from '../../../core/services/toast.service';
import { Router } from '@angular/router';

export class ConfirmPasswordErrorMatcher implements ErrorStateMatcher {

  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {

    return !!(
      control &&
      control.parent?.hasError('passwordMismatch') &&
      (control.dirty || control.touched)
    );
  }
}

@Component({
  selector: 'app-register',
  standalone: false,
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register implements OnInit{

  confirmPasswordMatcher = new ConfirmPasswordErrorMatcher();
  today = new Date()
  registrationForm: any

  hide: boolean = true;

  clickEvent(event: MouseEvent): void {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  constructor(private fb: FormBuilder, private register: RegisterService, private toaster: ToastService, private router: Router){}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      email: ['',[Validators.required,Validators.email]],
      phone: ['',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
      dob: ['',[Validators.required,ageValidator(18)]],
      password: ['',[Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,10}$/)]],
      confirmPassword: ['',Validators.required]
    },
    {
      validators: passwordMatchValidator
    }
  )
  }

  onSubmit(){
    if(this.registrationForm.valid){
      const payload = this.registrationForm.getRawValue()
      console.log(payload)
      this.register.storeUser(payload)
      this.onReset()
      this.toaster.customSuccess(`Account created for ${payload.name}`,'Created')
      this.router.navigate(['/login'])
    }
    else{
      this.registrationForm.markAllAsTouched()
    }
  }

  onReset(){
    this.registrationForm.reset();
    this.registrationForm.markAsPristine();
    this.registrationForm.markAsUntouched();
  }

}
