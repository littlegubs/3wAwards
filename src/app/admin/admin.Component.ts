import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {TokenInterface} from '../tokenInterface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  opened = false;
  screenWidth: number;
  userInfo: TokenInterface;
  tokenStorage = localStorage.getItem('user_token');

  constructor(private authService: AuthService, private router: Router ) {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
    this.userInfo = this.authService.getUserInfo(this.tokenStorage);
  }

  ngOnInit() {
  }

  Disconnection() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
