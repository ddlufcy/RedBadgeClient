import { Component } from '@angular/core';
import { Router } from '@angular/router';

<<<<<<< HEAD
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user.model';
import { Role } from './models/role.model';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
    title="RedBadge";
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    }
}
=======
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'RedBadge';
  // Alek
}
 
>>>>>>> 454bf7e109637d2ba5981bc39620532d6d7c2261
