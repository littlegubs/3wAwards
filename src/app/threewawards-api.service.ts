import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ThreewawardsApiService {

  // temporary variable for the dev
  localUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {
  }

  get(path: string) {
    return this.http.get(this.localUrl + path);
  }
}
