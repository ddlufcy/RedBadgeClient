
import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Games } from '../models/games';
import { DatabaseService} from '../services/database.service';
import { FormGroup, FormControl, FormBuilder, NgForm, FormControlName } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-games-edit',
  templateUrl: './edit-games.component.html',
  styleUrls: ['./edit-games.component.css']
})
export class EditGamesComponent implements OnInit {

  @Input() public game;
  id: number= null;
  EditGame: FormGroup;
  updateGames;




  constructor(
   private activatedRoute: ActivatedRoute,
    public router: Router,
    public formBuilder: FormBuilder,
    private databaseService: DatabaseService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ){ }

  ngOnInit() {
    console.log(this.data)
    this.EditGame = this.formBuilder.group({
      id: this.data.id,
      name: this.data.name,
      genre: this.data.genre,
      year: this.data.year,
      publisher: this.data.publisher
  })
  }}
