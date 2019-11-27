
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Games } from '../models/games';
import { DatabaseService} from '../services/database.service';
import { FormGroup, FormControl, FormBuilder, NgForm, FormControlName } from '@angular/forms'

@Component({
  selector: 'app-games-edit',
  templateUrl: './edit-games.component.html',
  styleUrls: ['./edit-games.component.css']
})
export class EditGamesComponent implements OnInit {
game: Games;
  id: number;
  name: FormControl;
  genre: FormControl;
  year: FormControl;
  publisher: FormControl
  
 
  //Form State
  loading = false;
  submitted = false;
 EditGame: FormGroup;
 isLoadingResults = false;
 _id:string='';


 
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public databaseService: DatabaseService,
    private formBuilder: FormBuilder
  ) {}
 
  ngOnInit() {
    this.name =new FormControl('');
    this.genre= new FormControl('');
    this.year = new FormControl('');
    this.publisher= new FormControl('');
    this.EditGame = this.formBuilder.group({
      
      name: this.name,
      genre: this.genre,
      year: this.year,
      publisher: this.publisher,
     
  });

  this.EditGame.valueChanges.subscribe(console.log);
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.databaseService.getAllGames().subscribe(response => {
      console.log(response);
      this.game = response;
    })
  }
     // convenience getter for easy access to form fields
     get f() { return this.EditGame.controls; }

  
 
  editGamesSumbitHandler(games) {
    // let newGames ={
      
    //   name: formValues.name,
    //   genre: formValues.genre,
    //   year: formValues.year,
    //   publisher: formValues.publisher

    // }
    
    //Update item by taking id and updated data object
    this.databaseService.updateGames(games)
    .subscribe((res) => {
      console.log('UPDATE GAME RESPONSE', res);
      this.databaseService.getAllGames()
    }, (err) => {
      console.log(err);
     
    }
  );
  }
 
}