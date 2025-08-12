import { Component, model } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { student } from '../../model/interfaces';
import { SignupService } from '../../services/signup.service';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  student:student={
    name:"",
    email:"",
    password:"",
    role:"",
    phone:null
  }
 
  onSubmit(){
    const isLocalData = localStorage.getItem("Angular18Local");
    if (isLocalData != null){
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.student);
      localStorage.setItem("Angular18Local",JSON.stringify(localArray));

    }else{
      const localArray = [];
      localArray.push(this.student);
      localStorage.setItem("Angular18Local",JSON.stringify(localArray));
    }
    alert("Registraion Success!")
  }



}
