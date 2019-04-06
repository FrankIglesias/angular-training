import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let localStorageService = this.injector.get(LocalStorageService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorageService.getValue('sessionToken')}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
