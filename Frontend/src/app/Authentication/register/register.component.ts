import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataservicesService } from '../../dataservices.service';
import { AuthData } from '../../models/notesmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private router: Router) {}
  registerData: AuthData = {
    Email: '',
    Password: '',
  };
  private service = inject(DataservicesService);
  register() {
    this.service.registerUser(this.registerData).subscribe(
      (result: any) => {
        if (result) {
          console.log(result);
          alert('Data saved successfully');
          this.router.navigateByUrl("/login")
        }
      },
      (err: any) => {
        console.error('Error occurred:', err);
        alert('Data not saved');
      }
    );
  }
}
