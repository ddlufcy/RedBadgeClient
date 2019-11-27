

import { HttpClient, HttpHeaders, HttpErrorResponse }from  '@angular/common/http';
import { Games } from '../models/games';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable, throwError, generate,  } from 'rxjs';
import { retry, catchError, tap, map } from 'rxjs/operators';
import { JwtInterceptor } from '../helpers/jwt.interceptor';
import { Post } from '../models/post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject}   from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class DatabaseService {

<<<<<<< HEAD
    constructor(private http: HttpClient) {}

    games: any;

    // Http Options
=======
  // HttpClient: any;
  error = new Subject<string>();
  constructor(private http: HttpClient) { }

  game: Games;

  // Http Options

>>>>>>> 663119c4886c1a127c16e2d21fc71466b5fe03be
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': localStorage.getItem('token')
    })
  }

  //   API URL
  private gamesURL = 'http://localhost:3000/games/';
  // Get games data
  getAllGames(): Observable<Games> {
=======

    return this.http
      .get<Games>(this.gamesURL)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

<<<<<<< HEAD
=======

    
>>>>>>> 663119c4886c1a127c16e2d21fc71466b5fe03be
        deleteGame(games){
        return this.http
          .delete<any>(`${this.gamesURL}/${games}`)
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
  addGames(newGame):any {
    return this.http
      .post<any>(this.gamesURL, newGame)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
// Post new game
createAndStoreGame() {

    );
}


  updateGames(games: Games) {
    console.log(games)
    const url = `${this.gamesURL}/${games.id}`;
    return this.http
      .put(url,{games: {name: games.name, genre: games.genre, year: games.year, publisher: games.publisher}})
      .pipe(
      tap(_ =>console.log(`updated product id=${games.id}`)),
        catchError(this.handleError)
      )
<<<<<<< HEAD
  }
=======


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
>>>>>>> 663119c4886c1a127c16e2d21fc71466b5fe03be


    // // Add a New Game
    // createGames(game): Observable<Games> {
    //   return this.http
    //     .post<Games>(this.gamesURL, JSON.stringify(game), this.httpOptions)
    //     .pipe(
    //       retry(2),
    //       catchError(this.handleError)
    //     )
    // }

<<<<<<< HEAD

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
=======
>>>>>>> 663119c4886c1a127c16e2d21fc71466b5fe03be
