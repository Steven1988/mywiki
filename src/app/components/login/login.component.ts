import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http'; 
import { RouterModule, Router, Routes } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'login',
	templateUrl: 'login.pug',
	styleUrls: ['login.scss']
})

export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	username: string;
	password: string;
	errorMessage: string;
	loginSuccess: boolean;
	token: string;


	constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

	ngOnInit(): void {
		this.loginForm = new FormGroup({
			username: new FormControl(),
			password: new FormControl()
		})

	}

	login(user: NgForm): void {
		// console.log(user.value, 'Login Button')
		this.username = user.value.username;
		this.password = user.value.password;

		const headers = new HttpHeaders().set('Content-Type', 'application/json')

		this.authService.login(this.username, this.password).subscribe(res => {
			if(res.token) {
				localStorage.token = res.token;
				localStorage.name = res.name;
				localStorage.userId = res.userid;
				console.log(res.name);
				this.goTo('');
			} 
			else if (!res.token) {
				this.errorMessage = res.message;
			}

		});

		// this.http.post('api/authenticate', user.value, { headers }).map((res: Response) => {
		// 	res.ok;
		// 	console.log(res);
		// 	this.errorMessage = res.message;
		// 	this.loginSuccess = res.success;
		// 	this.storeToken(res);
		// }).subscribe()
	}

	storeToken(data: any) {
		// console.log(data)
		if (this.loginSuccess == false) {
			// this.errorMessage = data.message;
			// console.log('Valid')
		}
		if (this.loginSuccess == true) {
			// this.errorMessage = data.message;
			this.token = data.token;
			
			this.goTo('')
		}
	}
	goTo(path: string): void {
		// console.log(path);
		this.router.navigate([path]);
	}
}