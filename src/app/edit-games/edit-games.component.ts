
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Games } from '../models/games';
import { DatabaseService} from '../services/database.service';
 
@Component({
  selector: 'app-games-edit',
  templateUrl: './edit-games.component.html',
  styleUrls: ['./edit-games.component.css']
})
export class EditGamesComponent implements OnInit {
 
  id: number;
  data: Games;
 
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public databaseService: DatabaseService
  ) {
     
  }
 
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.databaseService.getAllGames().subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }
 
  updateGames() {
    //Update item by taking id and updated data object
    this.databaseService.updateGames(this.id, this.data).subscribe(response => {
      this.router.navigate(['games']);
    })
  }
 
}