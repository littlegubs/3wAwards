import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {TokenInterface} from './tokenInterface';
import {AuthService} from './auth.service';

@Injectable()
export class AdminGuard implements CanActivate {

  tokenStorage = localStorage.getItem('user_token');
  userInfo: TokenInterface;

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.userInfo = this.authService.getUserInfo(this.tokenStorage);
    if (this.userInfo.roles[0] === 'ROLE_ADMIN') {
      return true;
    } else {
      this.router.navigate(['**']);
    }
  }
}
