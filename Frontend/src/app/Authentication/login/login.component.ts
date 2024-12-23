import { Component, inject } from '@angular/core';
import { AuthData } from '../../models/notesmodel';
import { DataservicesService } from '../../dataservices.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router:Router){}
  private service = inject(DataservicesService);
  LoginData: AuthData = {
    Email: '',
    Password: '',
  };
  loginUser() {
    this.service.LoginUser(this.LoginData).subscribe(
      (result: any) => {
        if (result) {
          alert('login success');
          this.router.navigateByUrl("/noteslist")

        }
      },
      (err: any) => {
        console.error('Error occurred:', err);
        alert('Incorrect Credentials');
      }
    );
  }
  logout(){
    this.router.navigateByUrl("/logout")
  }
}
