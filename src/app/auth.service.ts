import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import * as moment from 'moment';
import * as jwtdecode from 'jwt-decode';

@Injectable()
export class AuthService {

  // temporary variable for the dev
  localUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {
  }
  private subjectConnected = new Subject<any>();
  private subjectToken = new Subject<any>();
  isConnected = new EventEmitter<boolean>();
  token = new EventEmitter<string>();

  sendIsConnected(isConnected: boolean) {
    this.subjectConnected.next(isConnected);
    this.isConnected.emit(isConnected);
  }
  getIsConnected(): Observable<any> {
    return this.subjectConnected.asObservable();
  }
  sendToken(token: string) {
    this.subjectToken.next(token);
    this.token.emit(token);
  }
  gettoken(): Observable<any>  {
    return this.subjectToken.asObservable();
  }
  login(_username: string, _password: string) {
    const body = new FormData();
    body.append('_username', _username);
    body.append('_password', _password);

    this.http.post(this.localUrl + 'login_check', body).subscribe(
      res => {
        const usertoken = JSON.parse(JSON.stringify(res));
        this.setTokenInLocalStorage(res);
        this.sendToken(usertoken.token);
        this.sendIsConnected(true);
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
    const usertoken = JSON.parse(JSON.stringify(authResult));
    localStorage.setItem('user_token', usertoken.token);
    localStorage.setItem('expires_at', JSON.stringify(expireAR.valueOf()));
  }

  logout() {
    localStorage.removeItem('user_token');
    localStorage.removeItem('expires_at');
    this.sendIsConnected(false);
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  getUserInfo(token: string) {
    return jwtdecode(token);
  }
}


