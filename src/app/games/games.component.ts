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
<<<<<<< HEAD

  gamesData: any;
  game: Games;
  toggle: boolean = false;

=======
  response$: Observable<any>;
  public gamesData: any;
  public game: Games;
  toggle: boolean= false;
>>>>>>> ce293965b6300579d417b230fd5b7353c66ceda9
  // modalRef: BsModalRef;

  // setToggle(): void {
  //   this.toggle = !this.toggle
  // }

  constructor(
    public db: DatabaseService,
    public http: HttpClient,
<<<<<<< HEAD


=======
    public dialog:MatDialog
    
>>>>>>> ce293965b6300579d417b230fd5b7353c66ceda9
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
    this.db.getAllGames().subscribe(response => {
      console.log(response);
      this.gamesData = response;
    })
  }

  deleteGame(game) {
    this.db.deleteGame(game).subscribe(response => {
      //Update list after delete is successful
      console.log(response);
      this.getAllGames();
    });
  }
<<<<<<< HEAD


  updateGame(game) {
    //edit item in Student data
    this.db.updateGames(game).subscribe(response => {
      //Update list after edit is successful
      console.log(response);
      this.getAllGames();
    });
  }
=======
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
  
    
      
    
  
  // updateGame(game) {
  //   //edit item in Student data
  //   this.DatabaseService.editGame(game).subscribe(response => {
  //     //Update list after edit is successful
  //     console.log(response);
  //     this.getAllGames();
  //   });
  // }
>>>>>>> ce293965b6300579d417b230fd5b7353c66ceda9
}

