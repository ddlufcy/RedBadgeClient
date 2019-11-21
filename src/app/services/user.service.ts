import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiURL}/auth/`);
    }

    register(user: User) {
        return this.http.post(`${environment.apiURL}/auth/signup`, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiURL}/users/${id}`);
    }
}