
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Games } from '../models/games';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { JwtInterceptor } from '../helpers/jwt.interceptor';




@Injectable({
  providedIn: 'root',
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  game: Games;

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    })
  }
  //   API URL
  private gamesURL = 'http://localhost:3000/games/';
  // Get games data
  getAllGames(): Observable<Games> {
    return this.http
      .get<Games>(this.gamesURL)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // // Delete item by id
  // deleteGame(game): any {
  //   return this.http
  //     .delete(`http://localhost:3000/games/${game}`, this.httpOptions)

  // }
  deleteGame(game) {
    return this.http
      .delete<any>(`${this.gamesURL}${game}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  // Add a New Game
  addGames(game) {
    return this.http
      .post<any>(`${this.gamesURL}${game}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  updateGames(id, game): Observable<Games> {
    return this.http
      .put<Games>(this.gamesURL + id, JSON.stringify(game), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


}
