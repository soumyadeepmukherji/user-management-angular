import { Injectable, Service } from '@angular/core';
import { NgxMatToastService } from 'ngx-mat-toast';

@Injectable({providedIn: 'root'})
export class ToastService {
    constructor(private toastService: NgxMatToastService){}

    showSuccess(){
    this.toastService.success(
      'User added successfully!',
      'Success'
    )
    }

    showError() {
        this.toastService.error(
        'Something went wrong!',
        'Error'
        );
    }

    showWarning() {
        this.toastService.warning(
        'Please check the entered details.',
        'Warning'
        );
    }

    showInfo() {
        this.toastService.info(
        'Fetching user details...',
        'Information'
        );
    }

    successLogin(){
        this.toastService.success(
            'Logged In successfully',
            'Login'
        )
    }

    loginFailed(){
        this.toastService.error(
            'In valid Credeancials',
            'Failed'
        )
    }
}
