import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { LoginPageComponent } from './components/login-page/login-page.component';
=======
import { SignupComponent } from './signup/signup.component';
>>>>>>> 7cb973a (added signup page)

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, LoginPageComponent],
=======
  imports: [RouterOutlet, SignupComponent],
>>>>>>> 7cb973a (added signup page)
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DatStat';
}
