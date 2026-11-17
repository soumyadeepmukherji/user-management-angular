import { Injectable, Service } from '@angular/core';

@Injectable({providedIn: 'root'})
export class RegisterService {
    users: any[] = JSON.parse (localStorage.getItem('USER') || '[]')

    storeUser(payload: any){
        const existingUser = this.users.find(u => u.email === payload.email)
        if(existingUser){
            return false
        }
        this.users.push(payload)
        localStorage.setItem('USER',JSON.stringify(this.users))
        return true
    }

    getUser(){
        return JSON.parse(localStorage.getItem('USER') || '[]')
    }
}
