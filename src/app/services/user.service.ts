import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
const apiURL = 'http://localhost:3000';
@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${apiURL}/auth`);
    }

    register(user: User) {
        return this.http.post(`${apiURL}/auth/signup`, user);
    }

    delete(id: number) {
        return this.http.delete(`${apiURL}/auth/${id}`);
    }
}