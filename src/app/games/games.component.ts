import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
 
  gamesData: any;
 
  constructor(
    public DatabaseService: DatabaseService
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
    //Delete item in Student data
    this.DatabaseService.deleteGame(this.gamesData.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllGames();
    });
  }
}
 
