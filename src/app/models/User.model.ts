export class User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  locale: string;

  constructor(signUpForm) {
    this.first_name = signUpForm.firstName;
    this.last_name = signUpForm.lastName;
    this.email = signUpForm.email;
    this.password = signUpForm.password;
    this.password_confirmation = signUpForm.password;
    this.locale = "en";
  }
}
