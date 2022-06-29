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

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cookie = this.getTokenFromLocalStorageOrCookie();
    request = request.clone({ setHeaders: { 'biscoito':  cookie as string });
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
        return c.substring(cookieName.length, c.length).replace('=', '');
      }
    }
    return '';
  }

  getTokenFromLocalStorageOrCookie() {
    if(localStorage.getItem("authToken") == null || localStorage.getItem("authToken") == ''){
      const token = this.getCookie('authToken');
      localStorage.setItem("authToken", token);
    }
    return localStorage.getItem("authToken");
  }
}

