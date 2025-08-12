import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { StudentComponent } from './components/student/student.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LogoutComponent } from './components/logout/logout.component';

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, AdminComponent,StudentComponent,LoginComponent,SignupComponent,LogoutComponent,RouterModule],
=======
  imports: [RouterOutlet,RouterModule],
>>>>>>> a478b1137801d18697584cbdd58cfa98c0d9c3d1
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularTraineeDay2';
}
