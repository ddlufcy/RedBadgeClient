import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { APIURL } from '../../environments/environment.prod';

const apiURL = 'http://localhost:3000';
@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${APIURL}/auth`);
    }

    register(user: User) {
        return this.http.post(`${APIURL}/auth/signup`, user);
    }

    delete(id: number) {
        return this.http.delete(`${APIURL}/auth/${id}`);
    }
}
