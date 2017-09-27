import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


// Components // 
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/AddUser/add-user.component';
import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './notes/add-note/add-note.component';

import { ReactiveFormsComponent } from './tutorials-tests/reactive-forms.component';

// Services
import { UsersService } from './services/users-service';

// Routing
import { AppRoutingModule } from './app-routing/app-routing.module'

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent,    
    UsersComponent,
    AddUserComponent,
    NotesComponent,
    AddNoteComponent,
    ReactiveFormsComponent
  ],
  providers: [ UsersService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
