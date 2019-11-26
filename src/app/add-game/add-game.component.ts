
import { Component, OnInit } from '@angular/core';
import { AddGames } from '../models/addGame';
import { DatabaseService } from '../services/database.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service'



@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})

export class AddGameComponent implements OnInit {
 
  Game: AddGames
  
public gamesURL = "https://localhost:3000/games"
  constructor(
    public databaseService: DatabaseService,
    public router: Router,
    public auth: AuthenticationService
  ) {
    this.Game = new AddGames;
  }
  addGame = new FormGroup({
    name: new FormControl(''),
    genre: new FormControl(''),
    year: new FormControl(''),
    publisher: new FormControl('')
  }) 

  ngOnInit() {
  }

  submitForm(addGame) {
    this.databaseService.addGames(this.addGame).subscribe((response) => {
      console.log(response);
    });

  }

}

  




