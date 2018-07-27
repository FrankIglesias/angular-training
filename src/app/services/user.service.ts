import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class UserService {

  ROOT_URL: string = 'https://wbooks-api-stage.herokuapp.com/api/v1/';

  constructor(private http: HttpClient) { }

  createUser (user) {
    this.http.post(this.ROOT_URL + 'users', {user})
      .subscribe(response => {})
  }

  login(user) {
    this.http.post(this.ROOT_URL + 'users/sessions', user)
      .subscribe(response => {})
  }
}
