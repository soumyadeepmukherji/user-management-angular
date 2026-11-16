import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../features/users/models/user.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {

    constructor(private http: HttpClient){}

    private BASE_API = 'https://jsonplaceholder.typicode.com/users'

    getData(): Observable<HttpResponse<User[]>>{
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })

        return this.http.get<User[]>(this.BASE_API,{
            headers: headers,
            observe: 'response'
        })
    }

    addData(payload: User): Observable<HttpResponse<User[]>>{
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })

        return this.http.post<User[]>(this.BASE_API,payload,{
            headers: headers,
            observe: 'response'
        })
    }

    
    
}
