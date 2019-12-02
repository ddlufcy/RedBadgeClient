
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
<<<<<<< HEAD

  game: Games;
  id: number= null;
  EditGame =  new FormGroup({
    name: new FormControl(''),
    genre: new FormControl(''),
    year: new FormControl(''),
    publisher: new FormControl('')
  });
=======
  
  @Input() public game;
  id: number= null;
  EditGame: FormGroup;
  updateGames;



 
>>>>>>> ce293965b6300579d417b230fd5b7353c66ceda9
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
  }
<<<<<<< HEAD
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
=======
 
//   editGamesSumbitHandler(id: any, EditGame) {
  
//     this.databaseService.updateGames(id, EditGame)
//     .subscribe((res) => {
//       console.log(EditGame);
//       console.log('UPDATE GAME RESPONSE', res);
//     }, (err) => {
//       console.log(err);
     
//     });}
 }
>>>>>>> ce293965b6300579d417b230fd5b7353c66ceda9
