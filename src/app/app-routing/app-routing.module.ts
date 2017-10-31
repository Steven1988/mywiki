import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../components/home.component';
import { AuthGuard } from '../_guards/auth.guard';
import { UsersComponent } from '../components/users/users.component';
import { AddUserComponent } from '../components/users/AddUser/add-user.component';
import { NotesComponent } from '../components/notes/notes.component';
import { AddNoteComponent } from '../components/notes/add-note/add-note.component';
import { LoginComponent } from '../components/login/login.component';
import { ReactiveFormsComponent } from '../tutorials-tests/reactive-forms.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'users', component: UsersComponent },
	{ path: 'users/add-user', component: AddUserComponent },
	{ path: 'notes', component: NotesComponent },
	{ path: 'notes/add-note', component: AddNoteComponent },
	{ path: 'tutorials', component: ReactiveFormsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}