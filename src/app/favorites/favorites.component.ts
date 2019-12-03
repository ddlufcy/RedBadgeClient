import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Observable } from 'rxjs';
import { Games } from '../models/games';
import { HttpClient } from '@angular/common/http';
import { EditGamesComponent } from '../edit-games/edit-games.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  response$: Observable<any>;
  game$: Observable<Games[]>;
  stuff: any;
  public gamesData: any;
  public game: Games;
  toggle: boolean= false;
  constructor(public DatabaseService: DatabaseService,
    public http: HttpClient,
    public dialog:MatDialog)
     { this.gamesData = [];}

  ngOnInit() {
    this.getAllFavGames();
  }

    getAllFavGames() {
    //Get saved list of students
    this.DatabaseService.getAllFavGames().subscribe(response => {
      console.log(response);
      this.gamesData = response;
    })
  }

  deleteFavGame(game) {
    this.DatabaseService.deleteFavGame(game).subscribe(response => {
      //Update list after delete is successful
      console.log(response);
      this.getAllFavGames();
    });
  }
  openFavUpdate(game): void {
    const dialogRef = this.dialog.open(EditGamesComponent, {
      data: game})

      dialogRef.afterClosed().subscribe(res => {
        this.response$ = this.DatabaseService.updateFavGames(res.id, res)
        this.response$.subscribe(res => {
          console.log(res)
          this.getAllFavGames();
        })
    })}
}
