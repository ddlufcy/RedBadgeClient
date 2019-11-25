import { Component } from '@angular/core';
import { Router } from '@angular/router';


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

