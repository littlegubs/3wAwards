import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  // temporary variable for the dev
  loginUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {
  }

  login(_username: string, _password: string) {
    const body = new FormData();
    body.append('_username', _username);
    body.append('_password', _password);

    this.http.post(this.loginUrl + 'api/login_check', body).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(body);
        console.log('Error occured');
      }
    );
  }

}
