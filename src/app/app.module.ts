import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthService } from './providers/auth.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';


// Must export the config
export const firebaseConfig = {
    apiKey: 'AIzaSyCvQol77iIE1IGf0shtk-4__Hm9HbQqmls',
    authDomain: 'appweb-7dc7d.firebaseapp.com',
    databaseURL: 'https://appweb-7dc7d.firebaseio.com',
    storageBucket: 'appweb-7dc7d.appspot.com',
    messagingSenderId: '150630602931'
};

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
