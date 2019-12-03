import { Component, OnInit } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { DatabaseService } from '../services/database.service';
import { Games } from '../models/games';
import { EditGamesComponent } from '../edit-games/edit-games.component';
import { AddGameComponent } from '../add-game/add-game.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})


export class GamesComponent implements OnInit {
  response$: Observable<any>;
  game$: Observable<Games[]>;
  stuff: any;
  public gamesData: any;
  public game: Games;
  toggle: boolean= false;
  // modalRef: BsModalRef;


  constructor(
    public DatabaseService: DatabaseService,
    public http: HttpClient,
    public dialog:MatDialog

  ) {
    this.gamesData = []; 
  }



  ngOnInit() {
    this.isAdmin()
    this.getAllGames();

  }
  // postGames(): void {
  //   this.game$ = this.DatabaseService.getPizzasByUser()
  //   this.stuff = this.DatabaseService.getUser()
  //   this.stuff.subscribe(res => {
  //     this.stuff = res
  //   })
  // }

  isAdmin() {
    let user = sessionStorage.getItem("username")
    if (user === "admin") {
      return true
    } else {
      return false
    }
  }

  setToggle(): void {
    const setToggle = !this.toggle
  }

  getAllGames() {
    //Get saved list of students
    this.DatabaseService.getAllGames().subscribe(response => {
      console.log(response);
      this.gamesData = response;
    })
  }

  deleteGame(game) {
    this.DatabaseService.deleteGame(game).subscribe(response => {
      //Update list after delete is successful
      console.log(response);
      this.getAllGames();
    });
  }
  openUpdate(game): void {
    const dialogRef = this.dialog.open(EditGamesComponent, {
      data: game})

      dialogRef.afterClosed().subscribe(res => {
        this.response$ = this.DatabaseService.updateGames(res.id, res)
        this.response$.subscribe(res => {
          console.log(res)
          this.getAllGames();
        })
    })}
    openAddGames(game): void {
      const dialogRef = this.dialog.open(AddGameComponent, {
        data: game})
        dialogRef.afterClosed().subscribe(res => {
            this.getAllGames();
         } )
    }
    //add to favs
    addToFavs(game){
      console.log(game)
    this.DatabaseService.addFavGame(game).subscribe(response => {
      console.log(response);
      this.getAllGames();
    })
    }

}




