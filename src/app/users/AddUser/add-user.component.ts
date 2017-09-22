import { Component, Input, OnInit } from '@angular/core';
// import { NgModel } from '@angular/forms';

import { User } from '../user';


@Component({
	selector: 'addUser',
	template: `
	<div class="addUser">
	  <input [(ngModel)]="nUser.name" name="name" placeholder="Add User" class="form-control"/>
	  <button (click)="AddUser(nUser.name)" class="btn btn-default">Add </button>
	  <p class="name">{{ nUser.name }}</p>
	</div>
	`,
	// templateUrl: './add-user.pug'
})

export class AddUserComponent implements OnInit {
	@Input() newUser: User;
	// newUser1 = { name: '' };
	value: string = '';

	// newUser: string 
	ngOnInit(): void {
		// console.log(this.newUser.name)
		// this.newUser = {}
		// this.newUser = {
		// 	_id: 687451,
		// 	name: 'knud',
		// 	password: '1234',
		// 	__v: 77
		// }
	}
	AddUser(name: string) {
		// this.message = 'HEYAA';
		console.log(name);
		this.newUser.name = name;
	}
	update(value: string) {
		console.log(value)
		this.value = value
	}

}