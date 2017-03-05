import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    private isLoggedIn: boolean;
    private user_displayName: string;
    private user_email: string;

    constructor(public authService: AuthService, private router: Router) {
      this.authService.af.auth.subscribe(auth =>{
        if(auth == null) {
          // not logged in
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          // logged in
          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.user_email = auth.google.email;
          this.router.navigate(['']);
        }
      });
    }
}
