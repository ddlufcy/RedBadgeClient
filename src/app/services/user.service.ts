import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../environments/environment.prod';
import { Auth } from '../models/auth.model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': sessionStorage.getItem('token')
  })
}
const httpNoAuthOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

export class UserService {
  
  
}
