
import { Component, OnInit, Input } from '@angular/core';
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
  @Input() public game;
  postForm: FormGroup;
  addGames;

  public gamesURL = "https://localhost:3000/games"
  // HttpClient: any;
  constructor(
    public dbService: DatabaseService,
    public router: Router,
    public auth: AuthenticationService,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    console.log(this.postForm);
    this.postForm = this.fb.group({
      name: new FormControl(''),
      genre: new FormControl(''),
      year: new FormControl(''),
      publisher: new FormControl('')
    })
   }

  
    onCreatePost(game) {
    // const values = game.value
       //Send Http request
     this.dbService.addGames(game.value);
    }
    
    }
