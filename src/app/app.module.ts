import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


// Components // 
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/users/AddUser/add-user.component';
import { NotesComponent } from './components/notes/notes.component';
import { AddNoteComponent } from './components/notes/add-note/add-note.component';
import { LoginComponent } from './components/login/login.component';

import { ReactiveFormsComponent } from './tutorials-tests/reactive-forms.component';

// Services
import { UsersService } from './services/users-service';
import { NotesService } from './services/notes-service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './_guards/auth.guard';
import { MyIntercepter } from './interceptors/my.interceptor';

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
    HomeComponent,
    NavigationComponent,    
    UsersComponent,
    AddUserComponent,
    NotesComponent,
    AddNoteComponent,
    LoginComponent,
    ReactiveFormsComponent
  ],
  providers: [ UsersService, NotesService, AuthGuard, AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: MyIntercepter, multi: true } 
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
