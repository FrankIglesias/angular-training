import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  first_name: string = '';
  last_name: string ='';

  constructor(private fb: FormBuilder) {
  this.rForm = fb.group({
    'email': [null, Validators.required],
    'password': [null, Validators.required],
    'first_name': [null, Validators.required],
    'last_name': [null, Validators.required],
    'locale': 'en'
  })
  }

  ngOnInit() {}
  logUser(user) {
    console.log(user);
  }
}
