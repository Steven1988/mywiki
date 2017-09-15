import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'navigation',
	templateUrl: 'navigation.pug'
})

export class NavigationComponent implements OnInit {
	// navItems: object[]

	navItems = [
		{ name: 'Home', routerlink: '' }, 
		{ name: 'Users', routerlink: 'users'}
	]

	ngOnInit(): void {
		// navItems = [
		// { name: 'Home' }, 
		// { name: 'Users' }
		// ]
		// console.log(navItems);
	}
}