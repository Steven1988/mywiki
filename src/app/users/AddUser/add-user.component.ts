import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { NgModel } from '@angular/forms';

import { User } from '../user';


@Component({
	selector: 'addUser',
	// template: `
	// <div class="addUser">
	//   <input [(ngModel)]="nUser.name" name="name" placeholder="Add User" class="form-control"/>
	//   <button (click)="AddUser(nUser.name)" class="btn btn-default">Add </button>
	//   <p class="name">{{ nUser.name }}</p>
	// </div>
	// `,
	templateUrl: './add-user.pug'
})


export class AddUserComponent implements OnInit {
	myForm: FormGroup;
	post: any;
	// description: string;
	name: string;
	email: string;

	constructor(private http: HttpClient) {}
	// constructor(private fb: FormBuilder) {
	// 	// this.createForm();
	// 	this.myForm = this.fb.group({
	// 		name: ['', Validators.required ],
	// 		email: ['', Validators.required ],
	// 	})

		// this.rForm = fb.group({
		// 	'name': [null, Validators.required],
		// 	'description': [null, Validators.compose([Validators.required, Validators.minLength(30)])],
		// 	'validate': ''
		// })
	// }

	ngOnInit(): void {
		this.myForm = new FormGroup({
			name: new FormControl(),
			email: new FormControl()
		})
	}

	register(myForm: NgForm) {
		console.log(myForm.value);
		this.name = myForm.value.name;
		this.email = myForm.value.email;
		
		this.http.post('/api/users/add', myForm.value).subscribe();
	} 

	update(value: string) {
		console.log(value)
		// this.value = value
	}

}