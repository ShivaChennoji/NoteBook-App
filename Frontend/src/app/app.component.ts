import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterLinkActive,RouterModule,RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isLoggedIn = false;

  constructor(private router: Router) {}
    logout() {
      this.isLoggedIn = false;
      this.router.navigate(['/login']);
    }
}
