import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// import { Http } from '@angular/Http';

import { User } from '../users/user';

@Injectable()

export class UsersService {
	users: User[];
	constructor(private http: HttpClient) {}

	// interface UsersResponse {
	// 	users: User[]
	// }
	private usersUrl = '/api/users';

	public getUsers(): Observable<User[]> {
		// return [{
		// 	id: 15677,
		// 	name: 'knud',
		// 	password: 'Something'
		// }]

		// let response = this.http.get(this.usersUrl).map(this.extractData)
		// return this.http.get(this.usersUrl).toPromise().then(this.extractData)
		// return this.http.get('/api/users').map(res => res.valueOf());

		return this.http.get('/api/users', {observe: 'response'})
			.map(resp => {
				// console.log(resp);
				// resp.body = users 
				this.users = resp.body;
				console.log(this.users);
				return this.users;
			})

		// return this.users;
		// return this.http.jsonp.get('/api/users').map

		// console.log(this.extractData);
		// return response;

		// this.http.get(this.usersUrl).subscribe(data => {
			// this.users = data;
		// })


		// return this.http.get('/api/users').subscribe(data => {
		// 	let users = data;
		// 	console.log(data);
		// 	return this.users;	
		// });
		// console.log(this.users);
		// return this.users;


		// return this.http.get('/api/users').subscribe(data => {
		// 	// return data;
		// })

	}

	private extractData(res: Response) {
		// let body = res.json();
		console.log(res);
		return res.json();
		// return body || { }
	}
}