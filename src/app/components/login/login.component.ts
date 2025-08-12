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
    password:0,
  }

  onLogin(){
    
  }
}
