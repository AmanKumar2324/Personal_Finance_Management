import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';

  constructor() { }

  // Handle login form submission
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Handle login logic here
      console.log('Form submitted:', this.username, this.password);
    }
  }

  // Handle forgot password action
  onForgotPassword() {
    // Logic for handling forgot password
    console.log('Forgot Password clicked');
  }

  // Handle create account action
  onCreateAccount() {
    // Logic for handling create account
    console.log('Create Account clicked');
  }

}
