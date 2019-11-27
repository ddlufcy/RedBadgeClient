
import { Component, OnInit } from '@angular/core';
import { AddGames } from '../models/addGame';
import { DatabaseService } from '../services/database.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service'
import { Post } from '../models/post.model'


>>>>>>> 663119c4886c1a127c16e2d21fc71466b5fe03be

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})

export class AddGameComponent implements OnInit {

<<<<<<< HEAD
//   id: number;
//   data: Games;

  constructor(
    public databaseService: DatabaseService,
    public router: Router
  ) {
    // this.data = new Games();
  }

  ngOnInit() {
  }

//   submitForm() {
//     this.databaseService.createGames(this.data).subscribe((response) => {
//       this.router.navigate(['list']);
//     });

//   }

}
=======
  addGame: FormGroup;
  // addedGames = [];
  // newGame = {};

  public gamesURL = "https://localhost:3000/games"
  HttpClient: any;
  constructor(
    public dbService: DatabaseService,
    public router: Router,
    public auth: AuthenticationService,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() { }

  
    onCreatePost(postData: Post) {
      // Send Http request
      this.dbService.createAndStoreGame(postData.name, postData.genre, postData.year, postData.publisher);
    }
  }









>>>>>>> 663119c4886c1a127c16e2d21fc71466b5fe03be
