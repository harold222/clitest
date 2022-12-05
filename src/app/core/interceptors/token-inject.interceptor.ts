import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInjectInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try {
      // let newRequest = request;

      let newRequest = request.clone(
        {
          setHeaders: {
            authorization: `Bearer tokenapp`
          }
        }
      )

      return next.handle(newRequest);
    } catch (error) {
      console.log('interceptor: ', error)
      return next.handle(request);
    }
  }
}
