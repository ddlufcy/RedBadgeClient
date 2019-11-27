
import { Component, OnInit } from '@angular/core';
import { Games } from '../models/games';
import { DatabaseService } from '../services/database.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

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
 