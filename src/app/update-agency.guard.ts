import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {MembersService} from '../backend/services';
import {Member} from '../backend/model';
import {TokenInterface} from './tokenInterface';

@Injectable()
export class UpdateAgencyGuard implements CanActivate {

  tokenStorage = localStorage.getItem('user_token');
  userInfo: TokenInterface;
  member: Member;

  constructor(private router: Router, private membersService: MembersService, private authService: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.userInfo = this.authService.getUserInfo(this.tokenStorage);
    return this.membersService.get(this.userInfo.id).map(
      res => {
        this.member = res;
        for (const agency of this.member.agencies) {
          if (agency.id === parseInt(next.url[1].path, 10)) {
            return true;
          }
        }
        this.router.navigate(['**']);
        return false;
      });
  }
}
