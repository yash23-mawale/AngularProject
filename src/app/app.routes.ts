import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentComponent } from './components/student/student.component';
import { LogoutComponent } from './components/logout/logout.component';

export const routes: Routes = [
<<<<<<< HEAD

    {
        path:'',
        redirectTo:'homepage',
        pathMatch:'full'
    },
    {
        path:'admin',
        component:AdminComponent
    },
    {
        path:'homepage',
        component:HomepageComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'student',
        component:StudentComponent
    },
    {
        path:'logout',
        component:LogoutComponent
    }

=======
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path:'logout',
    component:LogoutComponent
  }
>>>>>>> a478b1137801d18697584cbdd58cfa98c0d9c3d1
];
