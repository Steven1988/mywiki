import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'navigation',
	templateUrl: 'navigation.pug',
	styleUrls: ['navigation.scss']
})

export class NavigationComponent implements OnInit {
	// navItems: object[]

	navItems = [
		{ name: 'Home', routerlink: '' }, 
		{ name: 'Users', routerlink: 'users'},
		{ name: 'Notes', routerlink: 'notes'},
		{ name: 'Tutorials', routerlink: 'tutorials'}
	]

	ngOnInit(): void {
		// navItems = [
		// { name: 'Home' }, 
		// { name: 'Users' }
		// ]
		// console.log(navItems);
	}
}