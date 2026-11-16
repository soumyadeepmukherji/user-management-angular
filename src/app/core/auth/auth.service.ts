import { Injectable } from "@angular/core";
import { LoginUser } from "../../features/auth/models/loginUser";

@Injectable({providedIn: 'root'})
export class AuthService{
    admin: LoginUser = {
        userID: 'admin@gmail.com',
        password: 'admin123'
    }

    login(userID: string, password: string): boolean{
        if(userID === this.admin.userID && password === this.admin.password){
            sessionStorage.setItem('isLoggedIn','true')
            return true
        }

        return false
    }

    isLoggedIn(): boolean {
        return sessionStorage.getItem('isLoggedIn') === 'true'
    }

    logOut(){
        sessionStorage.removeItem('isLoggedIn')
    }
}