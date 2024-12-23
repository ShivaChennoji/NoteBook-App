import { Routes } from '@angular/router';
import { NoteslistComponent } from './notes/noteslist/noteslist.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { NewnotesComponent } from './notes/newnotes/newnotes.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'noteslist',
    component: NoteslistComponent,
    canActivate: [authGuard],
  },
  {
    path: 'newnotes',
    component: NewnotesComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'logout',
    component: LoginComponent,
  },
];
