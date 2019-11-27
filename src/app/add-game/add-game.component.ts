
import { Component, OnInit } from '@angular/core';
import { AddGames } from '../models/addGame';
import { DatabaseService } from '../services/database.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service'
import { Post } from '../models/post.model'



@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})

export class AddGameComponent implements OnInit {

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








