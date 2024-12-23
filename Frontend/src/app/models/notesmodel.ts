export class NotesData {
  Title: string;
  Description: string;
  _id?: string;
  constructor() {
    (this._id = ''), (this.Title = ''), (this.Description = '');
  }
}
export class AuthData {
  Email: string;
  Password: string;
  constructor() {
    this.Email = '',
    this.Password = ''
  }
}
