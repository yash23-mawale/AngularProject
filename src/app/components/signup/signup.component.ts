<<<<<<< HEAD
import { Component, inject, model } from '@angular/core';
=======
import { Component, model } from '@angular/core';
>>>>>>> a478b1137801d18697584cbdd58cfa98c0d9c3d1
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
 
<<<<<<< HEAD
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
=======
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



>>>>>>> a478b1137801d18697584cbdd58cfa98c0d9c3d1
}
