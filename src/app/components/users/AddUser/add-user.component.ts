import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Router, Routes } from '@angular/router';

// import { NgModel } from '@angular/forms';

import { User } from '../user';
import { UsersService } from '../../../services/users-service';


@Component({
	selector: 'addUser',
	templateUrl: './add-user.pug'
})


export class AddUserComponent implements OnInit {
	myForm: FormGroup;
	post: any;
	// description: string;
	name: string;
	username: string;
	password: string;
	email: string;

	constructor(private http: HttpClient, private usersService: UsersService, private router: Router) {
		this.router = router;
	}
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
			username: new FormControl(),
			password: new FormControl(),
			name: new FormControl(),
			email: new FormControl()
		})
	}

	register(myForm: NgForm) {
		console.log(myForm.value);
		this.username = myForm.value.username;
		this.password = myForm.value.password;
		this.name = myForm.value.name;
		this.email = myForm.value.email;

		this.usersService.AddUser(myForm.value).subscribe()

		this.goTo('users')
		
		// this.http.post('/api/users/add', myForm.value).subscribe();
	} 

	update(value: string) {
		console.log(value)
		// this.value = value
	}

	goTo(path: string): void {
		console.log(path);
		this.router.navigate([path]);
	}
}