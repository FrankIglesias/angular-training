import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router, Route } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/User.model';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  rForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { 

    this.rForm = fb.group({
      'firstName': [],
      'lastName': [],
      'email': [],
      'password': []
    })
  }

  ngOnInit() {
  }

  signUp() {
    let user = new User(this.rForm.value);
    this.userService.createUser(user);
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

}
