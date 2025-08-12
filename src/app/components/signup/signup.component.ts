import { Component, inject, model } from '@angular/core';
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

// http :SignupService = inject(SignupService)

  student:student={
    name:"",
    email:"",
    password:"",
    role:"",
    phone:null
  }
 
  onSubmit(f:NgForm){
    // console.log("Form Data",this.student)
    console.log(f.value)
    alert("Form Submitted Successfully!");
    // this.getStudents()
  }


  // getStudents(){
  //   this.http.getStudents().subscribe((res:any)=>{
  //     console.log(res)
  //   })
  // }
}
