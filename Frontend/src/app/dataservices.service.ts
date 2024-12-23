import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthData, NotesData } from './models/notesmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataservicesService {
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get('http://localhost:4000/Get');
  }
  post() {
    return this.http.get<{ data: any[] }>('http://localhost:4000/Get');
  }
  delete(id: number) {
    return this.http.delete(`http://localhost:4000/notes/`+id);
  }
  updateById(item: any, Updatedrecored: any) {
    return this.http.put(`http://localhost:4000/notes/${item._id}`,
      Updatedrecored
    );
  }
  registerUser(User: AuthData) {
    return this.http.post('http://localhost:4000/register', User);
  }
  LoginUser(User: any) {
    return this.http.post('http://localhost:4000/login', User);
  }
  GetLoginUser():Observable<any> {
    return this.http.get('http://localhost:4000/Logindata');
  }
}
