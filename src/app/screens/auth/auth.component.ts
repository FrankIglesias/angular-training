import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private localStorageService: LocalStorageService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.localStorageService.removeValue(this.localStorageService.SESSION_TOKEN);
    this.router.navigate(['login']);
  }
}
