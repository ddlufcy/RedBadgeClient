import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FavsComponent } from './favs/favs.component';
import { MatButtonModule } from '@angular/material/button';
import { GamesComponent } from './games/games.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginSignupComponent } from './login-signup/login-signup.component';


const routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'favs', component:FavsComponent},
  {path: 'games', component:GamesComponent},
  {path: 'loginSignup', component: LoginSignupComponent },
  {path: '**', redirectTo: '/' },

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FavsComponent,
    GamesComponent,
    LoginSignupComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
     FormsModule,
    RouterModule.forRoot(routes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//develop
