import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { student } from '../../model/interfaces';
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
    phone:0
  }
 
  onSubmit(){
    console.log("Form Data",model)
    alert("Form Submitted Successfully!");
  }
}
