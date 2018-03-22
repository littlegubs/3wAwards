import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('user_token');

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization',
          'Bearer ' + token)
      });
      console.log(cloned);
      return next.handle(cloned);

    } else {
      return next.handle(req);
    }
  }
}
