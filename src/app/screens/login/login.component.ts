import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  email: string = '';
  password: string = '';
  
  constructor(
      private fb: FormBuilder,
      private UserService: UserService
    ) {
  this.rForm = fb.group({
    'email': [null, Validators.required],
    'password': [null, Validators.required],
    'locale': 'en'
  })
  }

  ngOnInit() {}
  logUser(user) {
    this.UserService.login(user)
  }
}
