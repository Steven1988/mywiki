import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'


@Injectable()

export class AuthService {
	public token: string;

	constructor(private http: HttpClient) {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.token = currentUser && currentUser.token;
	}

	login(username: string, password: string): Observable<any> {

		const headers = new HttpHeaders().set('Content-Type', 'application/json')

		return this.http.post('api/authenticate', JSON.stringify({username: username, password: password}), {headers}).map((res: Response) => {
			// console.log('HAAAlloooo', res)
			return res;
			// let token = res.token;
			// if(token) {
			// 	this.token = token;
			// 	localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
			// 	// localStorage.currentUser = {username: username, token: token}
			// 	// localStorage.token = res.token;
			// 	console.log(localStorage);
			// 	return res;
			// }
			// if(!token) {
			// 	// console.log(res.message);
			// 	return res;
			// }
		})
	}

	logout(user: any): any {
		return this.http.get('api/logout').map((res: Response) => {
			localStorage.clear();
			console.log(res);
		})
	} 

}