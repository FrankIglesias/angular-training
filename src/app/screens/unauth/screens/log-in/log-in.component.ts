import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router, Route } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/User.model';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  rForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private userService: UserService, 
    private router: Router
  ) { 

    this.rForm = fb.group({
      'email': [],
      'password': []
    })
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.rForm.value);
  }

  goToSignUp() {
    this.router.navigate(['sign-up']);
  }
}
