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

		this.http.post('api/authenticate', JSON.stringify({username: username, password: password}), {headers}).map((res: Response) => {
			console.log(res)
			let token = res.token;
			if(token) {
				this.token = token;
				localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
				console.log(localStorage);
				return res;
			}
		})
	}


}