import { Component, OnInit } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { DatabaseService } from '../services/database.service';
import { Games } from '../models/games';
import { EditGamesComponent } from '../edit-games/edit-games.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
// const header = {
//   headers: new HttpHeaders()
//   .set('Authorization')
//   }

export class GamesComponent implements OnInit {
  response$: Observable<any>;
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
    this.getAllGames();
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
        this.response$ = this.DatabaseService.updateGames(res, res)
        this.response$.subscribe(res => {
          console.log(res)
          this.getAllGames();
        })
    })}
  
    
      
    
  
  // updateGame(game) {
  //   //edit item in Student data
  //   this.DatabaseService.editGame(game).subscribe(response => {
  //     //Update list after edit is successful
  //     console.log(response);
  //     this.getAllGames();
  //   });
  // }
}

