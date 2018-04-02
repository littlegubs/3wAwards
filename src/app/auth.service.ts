import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as moment from 'moment';

@Injectable()
export class AuthService {

  // temporary variable for the dev
  localUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {
  }

  login(_username: string, _password: string) {
    const body = new FormData();
    body.append('_username', _username);
    body.append('_password', _password);

    this.http.post(this.localUrl + 'api/login_check', body).subscribe(
      res => {
        console.log(res);
        this.setTokenInLocalStorage(res);
      },
      err => {
      }
    );
  }

  signUp() {
    const body = new FormData();
  }

  private setTokenInLocalStorage(authResult) {
    const expireAR = moment().add(authResult.expiresIn, 'second');
    const Usertoken = JSON.parse(JSON.stringify(authResult));
    localStorage.setItem('user_token', Usertoken.token);
    localStorage.setItem('expires_at', JSON.stringify(expireAR.valueOf()));
  }

  logout() {
    localStorage.removeItem('user_token');
    localStorage.removeItem('expires_at');
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}


