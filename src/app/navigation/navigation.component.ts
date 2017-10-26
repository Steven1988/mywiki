import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

// import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http'; 

import { AuthService } from '../services/auth.service';

@Component({
	selector: 'navigation',
	templateUrl: 'navigation.pug',
	styleUrls: ['navigation.scss']
})

export class NavigationComponent implements OnInit {
	// navItems: object[]
	currentUser: string;

	constructor(private authService: AuthService, private router: Router) {}

	navItems = [
		{ name: 'Home', routerlink: '' }, 
		{ name: 'Users', routerlink: 'users'},
		{ name: 'Notes', routerlink: 'notes'},
		{ name: 'Tutorials', routerlink: 'tutorials'}
	]

	ngOnInit(): void {
		// console.log(this.currentUser);
		this.currentUser = localStorage.name;

		// if(localStorage.length > 1) {
		// 	this.currentUser = localStorage;
		// }
		// else {
		// 	this.currentUser = null;
		// }

		
		// navItems = [
		// { name: 'Home' }, 
		// { name: 'Users' }
		// ]
		// console.log(navItems);
	}

	logout(): void {
		console.log(this.currentUser);
		// localStorage.clear();
		// console.log(localStorage);
		this.authService.logout(localStorage.currentUser).subscribe();
		// location.reload();
	}

}