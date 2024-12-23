import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-newnotes',
  imports: [FormsModule, CommonModule],
  templateUrl: './newnotes.component.html',
  styleUrl: './newnotes.component.css',
})
export class NewnotesComponent{
  Title: string = '';
  Description: string = '';


  constructor(private http: HttpClient) {}
  private router = inject(Router);
  Onsave() {
    try {
      let data = {
        Title: this.Title,
        Description: this.Description,
      }
      this.http.post('http://localhost:4000/Create',data).subscribe((result: any) => {
          if (result) {
            alert('data saved');
            this.router.navigateByUrl('/noteslist');
          } else {
            alert('try again');
          }
        });
    } catch {
      alert('message');
    }
  }
  Clear() {
    (this.Title = ''),
    (this.Description = '');
  }
}
