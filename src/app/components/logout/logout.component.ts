import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent {
  router = inject(Router);

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/homepage');
  }
}
