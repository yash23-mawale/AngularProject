import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { StudentComponent } from '../student/student.component';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterOutlet,StudentComponent,LoginComponent,LogoutComponent,SignupComponent,RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
