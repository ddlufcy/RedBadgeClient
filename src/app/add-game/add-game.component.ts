
import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
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
  response: Observable<any>;
  @Output() created= new EventEmitter<void>();

  constructor(private dbService: DatabaseService, private fb: FormBuilder) { }


  ngOnInit() { 
    this.addGame=this.fb.group({
      name: new FormControl(),
      genre: new FormControl(),
      year: new FormControl(),
      publisher: new FormControl()
    })
  }

  
    onCreatePost():void {
      // Send Http request
      this.response=this.dbService.createGames(this.addGame.value)
      this.response.subscribe(res => console.log(res))
      this.addGame.reset()
      this.created.emit()
    }
  }