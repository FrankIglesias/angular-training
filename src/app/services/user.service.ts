import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  createUser (user: User): void {
  return this.http.post(process.env.API_BASE_URL + '/users', user)
  }
}
