import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

import {AlertService, JwtService, LoaderService} from '../services';
import {catchError, finalize} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(
    private jwtService: JwtService,
    private router: Router,
    private Alert: AlertService,
    private loaderService: LoaderService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    if (this.jwtService.token) {
      headersConfig['Authorization'] = `Bearer ${this.jwtService.token}`;
    }
    req = req.clone({
      setHeaders: headersConfig,
    });
    return next.handle(req)
      .pipe(
          finalize(() => {    this.loaderService.isLoading.next(false);}),
        catchError((error: HttpErrorResponse) => {
          if (400 <= error.status && error.status <= 526) {
            this.Alert.danger(`${error.error.data.error}`);
          }
          return throwError(error);
        })
      );


    /* const headersConfig = {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     };

     const token = this.jwtService.token;

     if (token) {
       headersConfig['Authorization'] = `Bearer ${token}`;
     }

     const request = req.clone({ setHeaders: headersConfig });
     return next.handle(request);
     */

  }
}
