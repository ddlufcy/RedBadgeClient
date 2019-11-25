import { Component, OnInit } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { DatabaseService } from '../services/database.service';
import { Games } from '../models/games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
// const header = {
//   headers: new HttpHeaders()
//   .set('Authorization')
//   }
 
export class GamesComponent implements OnInit {
  id: number;
  gamesData: any;
  game: Games;

  
  constructor(
    public DatabaseService: DatabaseService,
    public http: HttpClient
  ) {
    this.gamesData = [];
  }

 
  ngOnInit() {
    this.getAllGames();
  }
 
  getAllGames() {
    //Get saved list of students
    this.DatabaseService.getAllGames().subscribe(response => {
      console.log(response);
      this.gamesData = response;
    })
  }
  

 
  deleteGame(game) {
    this.DatabaseService.deleteGame(game).subscribe(response => {
      //Update list after delete is successful
      console.log(response);
      this.getAllGames();
    });
  }
}
 
