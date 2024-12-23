import { Component, inject, OnInit } from '@angular/core';
import { DataservicesService } from '../../dataservices.service';
import { CommonModule, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesData } from '../../models/notesmodel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-noteslist',
  imports: [FormsModule, CommonModule, RouterLink,TitleCasePipe],
  templateUrl: './noteslist.component.html',
  styleUrl: './noteslist.component.css',
})
export class NoteslistComponent implements OnInit {
  Title: string = '';
  Description: string = '';

  private services = inject(DataservicesService);
  ngOnInit(): void {
    this.GetAll();
  }
  public Datalist: NotesData[] = [];
  GetAll() {
    this.services.post().subscribe((res) => {
      if (res && res.data) {
        this.Datalist = res.data;
      } else {
        alert('No data found.');
      }
    });
  }
    OnEdit(item: NotesData) {
    let userBody = {
      Title: item.Title,
      Description: item.Description
    };
  
    this.services.updateById(item._id, userBody).subscribe(
      (result: any) => {
        if (result) {
          alert("Notes updated successfully!");
           // Refresh the notes list after updating 
          this.GetAll();
        } else {
          alert("Error updating note.");
        }
      },
      (error: any) => {
        console.error("Error during update:", error);
        alert("An error occurred while updating the note.");
      }
    )
  }
  OnDelete(item:any) {
    const verify = confirm(`Are you sure you want to delete item ${item}?`)
    if (verify) {
      this.services.delete(item).subscribe((result:any) => {
        if (result) {
          console.log(`Item ${item} deleted successfully.`);
          this.GetAll();
        } else {
          alert('Error deleting item.');
        }
      });
    }
  }
}
