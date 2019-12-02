
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Games } from '../models/games';
import { DatabaseService} from '../services/database.service';
import { FormGroup, FormControl, FormBuilder, NgForm, FormControlName } from '@angular/forms';


@Component({
  selector: 'app-games-edit',
  templateUrl: './edit-games.component.html',
  styleUrls: ['./edit-games.component.css']
})
export class EditGamesComponent implements OnInit {
  
  game: Games;
  id: number= null;
  EditGame =  new FormGroup({
    name: new FormControl(''),
    genre: new FormControl(''),
    year: new FormControl(''),
    publisher: new FormControl('')
  });



 
  constructor(
   private activatedRoute: ActivatedRoute,
    public router: Router,
    public formBuilder: FormBuilder,
    private databaseService: DatabaseService
    ){ }

  ngOnInit() {
  }
    getData(id){
      this.databaseService.getGames(id)
      .subscribe(data => {
        this.id = data.id;
        this.EditGame.setValue({
          name: data.name,
          genre: data.genre,
          year: data.year,
          publisher: data.publisher
        });
        console.log(data);
      });
    }

  
 
  editGamesSumbitHandler(form:NgForm) {
  
    this.databaseService.updateGames(this.id, form)
    .subscribe((res) => {
      console.log(form);
      console.log('UPDATE GAME RESPONSE', res);
    }, (err) => {
      console.log(err);
     
    });}
}
