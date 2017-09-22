import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { UsersComponent } from '../users/users.component';

const routes: Routes = [
	// { path: '', component: AppComponent },
	{ path: 'users', component: UsersComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}