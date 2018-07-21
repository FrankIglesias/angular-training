import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService }  from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class  SignupComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  email: string = '';
  password: string = '';
  first_name: string = '';
  last_name: string ='';

  constructor(
      private fb: FormBuilder,
      private  userservice: UserService) {
  this.rForm = fb.group({
    'email': [null, Validators.required],
    'password': [null, Validators.required],
    'password_confirmation': [null, Validators.required],
    'first_name': [null, Validators.required],
    'last_name': [null, Validators.required],
    'locale': 'en'
  })
  }

  ngOnInit() {}
  logUser(user) {
    this.userservice.createUser(user);
  }
}
