import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { login } from '../../model/interfaces';
import { SignupComponent } from '../signup/signup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,SignupComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login:login={
    name:"",
    password:'',
    role:''
  }

  router = inject(Router);

  onLogin(){
    const isLocalData = localStorage.getItem("Angular18Local");
    if (isLocalData != null){
      const users = JSON.parse(isLocalData);


      const isUserFound = users.find((m:login)=>m.name == this.login.name && m.password == this.login.password && m.role == this.login.role)
      if (isUserFound != undefined){
        if(this.login.role == 'student')
          this.router.navigateByUrl("student");
        else if(this.login.role == 'admin')
          this.router.navigateByUrl("admin");
        else if(this.login.role == 'teacher')
          this.router.navigateByUrl("teacher");
      }else{
        alert("Username or Password is Wrong");
      }
    }else{
      alert("NO User Found!");
    }
  }
}
