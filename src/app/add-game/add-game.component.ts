import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  loadedGames = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreateGame(postData: {name: string; genre: string, year: number, pub: string, comment: string, rank: number }) {
    // Send Http request
    this.http
      .post(
        'https://localhost:3000/fav/',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http.get('https://localhost:3000/fav/')
    .pipe(map(responseData => {
      const postsArray = [];
      for (const key in responseData) {
        if(responseData.hasOwnProperty(key)){
        postsArray.push({...responseData[key], id: key})
      }
    }
    return postsArray;
    }))
    .subscribe(posts => {
      console.log(posts)
    });
  }

}
