import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


// Components // 
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/AddUser/add-user.component';

// Services
import { UsersService } from './services/users-service';

// Routing
import { AppRoutingModule } from './app-routing/app-routing.module'

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule
  ],
  declarations: [
    AppComponent,
    UsersComponent,
    AddUserComponent,
    NavigationComponent
  ],
  providers: [ UsersService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
