import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import * as moment from 'moment';
import {FormGroup} from '@angular/forms';
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
        const userToken = JSON.parse(JSON.stringify(res));
        this.setTokenInLocalStorage(res);
        this.sendToken(userToken.token);
        this.sendIsConnected(true);
      },
      err => {
      }
    );
  }

  signUp(form: FormGroup) {

    const filterKeys = Object.keys(form.value);
    const body = new FormData();
    for (let i = 0; i < filterKeys.length; i++) {
      body.append(filterKeys[i], form.value[filterKeys[i]]);
    }
    console.log(this.http.post(this.localUrl + 'register', body).subscribe(res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }));
  }

  private setTokenInLocalStorage(authResult) {
    const expireAR = moment().add(authResult.expiresIn, 'second');
    const userToken = JSON.parse(JSON.stringify(authResult));
    localStorage.setItem('user_token', userToken.token);
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


