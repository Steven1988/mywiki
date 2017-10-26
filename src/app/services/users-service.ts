import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// import { Http } from '@angular/Http';

import { User } from '../components/users/user';

@Injectable()

export class UsersService {
	user : User;
	users: User[];
	constructor(private http: HttpClient) {}

	// interface UsersResponse {
	// 	users: User[]
	// }
	private usersUrl = '/api/users';

	// public addUser(): <user> {
	// 	return this.http.post('/api/users/' + user.id)
	// }

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
			.map((resp: any) => {
				// console.log(resp);
				// resp.body = users 
				this.users = resp.body;
				// console.log(this.users);
				return this.users;
			})

	}
	public AddUser(user: any): Observable<any> {

		const headers = new HttpHeaders().set('Content-Type', 'application/json')

		return this.http.post('/api/users/add', user, { headers }).map((resp: HttpResponse<Object>) => {resp.ok, console.log(resp)})
	}

	public deleteUser(user: any): Observable<any> {
		console.log('delete function in U Service')
		return this.http.delete('/api/users/delete/' + user._id).map((resp: HttpResponse<Object>) => resp.ok);
	}

	// private extractData(res: Response) {
	// 	// let body = res.json();
	// 	console.log(res);
	// 	return res.json();
	// 	// return body || { }
	// }
}