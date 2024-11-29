import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  // Handle the signup form submission
  onSubmit() {
    if (this.user.name && this.user.email && this.user.password) {
      // For now, just log the user data (this can be replaced with actual registration logic)
      console.log('User Data:', this.user);
      // After successful signup, navigate to the login page or home page
      this.router.navigate(['/login']); // Navigate to the login page
    } else {
      alert('Please fill in all the fields');
    }
  }

}
