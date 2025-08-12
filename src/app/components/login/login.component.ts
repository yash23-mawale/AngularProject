import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { login } from '../../model/interfaces';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,SignupComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login:login={
    username:"",
    password:'',
  }

  onLogin(){
    console.log("loginData",this.login);
  }
}
