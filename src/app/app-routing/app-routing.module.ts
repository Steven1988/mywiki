import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../components/home.component';
import { UsersComponent } from '../users/users.component';
import { AddUserComponent } from '../users/AddUser/add-user.component';
import { NotesComponent } from '../notes/notes.component';
import { AddNoteComponent } from '../notes/add-note/add-note.component';
import { LoginComponent } from '../components/login/login.component';
import { ReactiveFormsComponent } from '../tutorials-tests/reactive-forms.component';

const routes: Routes = [
	{ path: '' as 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'users', component: UsersComponent },
	{ path: 'users/addUser', component: AddUserComponent },
	{ path: 'notes', component: NotesComponent },
	{ path: 'notes/addNote', component: AddNoteComponent },
	{ path: 'tutorials', component: ReactiveFormsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}