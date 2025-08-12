import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { login } from '../../model/interfaces';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login:login={
    username:"",
<<<<<<< HEAD
    password:"",
=======
    password:'',
>>>>>>> 02ab7736f3a6dca701fba6327fce6fbd574ea7cb
  }

  onLogin(){
    console.log("loginData",this.login);
  }
}
