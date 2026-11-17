import { Injectable, OnInit } from "@angular/core";
import { LoginUser } from "../../features/auth/models/loginUser";
import { RegisterService } from "../services/register.service";

@Injectable({providedIn: 'root'})
export class AuthService{
    constructor(private register: RegisterService){}


    login(userID: string, password: string): boolean{
        const users = this.register.getUser()
        const success = users.find((user: any) => user.email === userID && user.password === password)
        if(success){
            sessionStorage.setItem('isLoggedIn','true')
        }
        
        return success
    }

    isLoggedIn(): boolean {
        return sessionStorage.getItem('isLoggedIn') === 'true'
    }

    logOut(){
        sessionStorage.removeItem('isLoggedIn')
    }
}