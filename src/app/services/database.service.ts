

import { HttpClient, HttpHeaders, HttpErrorResponse }from  '@angular/common/http';
import { Games } from '../models/games';
import { Injectable, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Observable, throwError, generate } from 'rxjs';
import { retry, catchError, tap, map } from 'rxjs/operators';
import { JwtInterceptor } from '../helpers/jwt.interceptor';
import { Post } from '../models/post.model';
import { Subject}   from 'rxjs';
import { ɵangular_packages_platform_browser_platform_browser_g } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
  
export class DatabaseService {

  gameObject: any;
  // HttpClient: any;
  error = new Subject<string>();
  constructor(private http: HttpClient) { }

  game: Games;
  session(token) {
    sessionStorage.setItem('token', token);
  }

  // Http Options

   httpOptions () {
    if (sessionStorage.getItem('token')) {
      return {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          "Authorization": sessionStorage.getItem('token')
        })
      }
    } else {
      return {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }
    }
  }

  //   API URL
  private gamesURL = 'http://localhost:3000/games/';
  //fav games URL
  private favsURL = 'http://localhost:3000/favs/';

  // Get games data
  getAllGames(): Observable<Games> {
    return this.http
      .get<Games>(this.gamesURL, this.httpOptions())
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  // getGames(id: number): Observable
  //   const url = `${this.gamesURL}${11}`;
  //   return this.http.get<Games>(url).pipe(
  //     tap(_ => console.log(`fetched game id=${11}`)),
  //     catchError(this.handleError)
  //   );
  // }

  
  deleteGame(game) {
    return this.http
      .delete<any>(`${this.gamesURL}${game}`, this.httpOptions())
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
//add to favs
addFavGame(id:any, game: any): Observable<any> {
  return this.http
    .post<any>(`${this.favsURL}${game}`, this.httpOptions())
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}




  updateGames(id, game): Observable<any> {
    console.log()
    const url = `${this.gamesURL}${id}`;
    return this.http
      .put<any>(url, game, this.httpOptions())
      .pipe( 
       
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

    // // Add a New Game
    createGames(game): Observable<Games> {
      return this.http
        .post<Games>(this.gamesURL,game, this.httpOptions())
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }
  
}