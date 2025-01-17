import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

export const routes: Routes = [
    // { path: 'login', component: LoginPageComponent },
    // { path: 'signup', loadComponent: () => import('./pages/signup/signup.component') },
//     { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
  { path: 'login', component: LoginPageComponent },
//   { path: 'home', component: HomePageComponent },
//   { path: 'signup', component: SignupPageComponent },
{ path: 'forgotPassword', component: ForgotPasswordComponent },

];
