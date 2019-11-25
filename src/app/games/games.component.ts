import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/game.service'

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private games: GamesService) { }

  ngOnInit() {
  }

  fetchGames(event){
    event.preventDefault();
    this.games.getGames()

  }

}
