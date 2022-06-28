import { Injectable } from '@angular/core';
import { 
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest}
from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class Interceptor implements HttpInterceptor {
  
 intercept( request: HttpRequest<any>, next: HttpHandler ): Observable <HttpEvent<any>> {
  request=request.clone({setHeaders:{'biscoito':this.getCookie('authToken')}})
  console.log(request);
  return next.handle(request);
 }


 getCookie(name: string) {
  let ca: Array<string> = document.cookie.split(';');
  let caLen: number = ca.length;
  let cookieName = `${name}`;
  let c: string;

  for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
          return c.substring(cookieName.length, c.length).replace('=','');
      }
  }
  return '';
}
}

