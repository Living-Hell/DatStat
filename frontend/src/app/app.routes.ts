import { Routes } from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  {path: "login", component: LoginPageComponent},
  { path: 'signup', component: SignupComponent },
  { path: '', component: SignupComponent },
];
