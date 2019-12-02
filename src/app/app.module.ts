import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
// import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';




import { AddGameComponent } from './add-game/add-game.component'
import { HeaderComponent } from './header/header.component';
import { GamesComponent } from './games/games.component'
import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor'

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AlertComponent } from './alert/alert.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { EditGamesComponent } from './edit-games/edit-games.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';





// const routes = [
//   {path: '', component: HomeComponent},
//   {path: 'about', component: AboutComponent},
//   {path: 'add', component:AddGameComponent},
//   {path: 'games', component:GamesComponent},
//   {path: 'login', component: LoginComponent },
//   {path: 'register', component: RegisterComponent  },
//   // {path: 'admin', component: AdminComponent, canActivate: [AuthGuard],data: { roles: [Role.Admin]} },
//   {path: '**', redirectTo: '/' }

// ];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    GamesComponent,
    LoginComponent,
    AddGameComponent,
    RegisterComponent,
    AlertComponent,
    RegisterComponent,
    FavoritesComponent,
    EditGamesComponent,
    CarouselComponent,
    NavbarComponent,
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule ,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    appRoutingModule,
    
    // RouterModule.forRoot(routes),


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }


