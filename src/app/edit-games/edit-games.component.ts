
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Games } from '../models/games';
import { DatabaseService} from '../services/database.service';
import { FormGroup, FormControl, FormBuilder, NgForm } from '@angular/forms'

@Component({
  selector: 'app-games-edit',
  templateUrl: './edit-games.component.html',
  styleUrls: ['./edit-games.component.css']
})
export class EditGamesComponent implements OnInit {
game: Games;
  id: number;
  
 
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
    this.EditGame = this.formBuilder.group({
      name: '',
      genre: '',
      year: '',
      publisher:'',
     
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
 
  editGamesSumbitHandler(form: NgForm) {
    this.loading= true;
    const formValue = this.EditGame.value;
    //Update item by taking id and updated data object
    this.databaseService.updateGames(this._id)
    .subscribe(res => {
      let id = res['_id'];
      this.isLoadingResults = false;
      this.router.navigate(['/games', id]);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    }
  );
  }

  
  
 
}