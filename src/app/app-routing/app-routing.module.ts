import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { UsersComponent } from '../users/users.component';
import { ReactiveFormsComponent } from '../tutorials-tests/reactive-forms.component';

const routes: Routes = [
	// { path: '', component: AppComponent },
	{ path: 'users', component: UsersComponent },
	{ path: 'tutorials', component: ReactiveFormsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}