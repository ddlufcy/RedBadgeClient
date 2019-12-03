import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service'
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  User;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private Auth: AuthenticationService) { 

  }

  ngOnInit() {
    // this.showUser();
  }
  // showUser() {
  //   // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  //   this.User = localStorage.getItem('currentUser'); 
  //   console.log()
  // }
}
