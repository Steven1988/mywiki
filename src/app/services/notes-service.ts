import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHandler, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { RequestOptionsArgs, Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()

export class NotesService {
	constructor(private http: HttpClient) {}

	// private headers = new Headers({ 'Content-Type': 'application/json' });
	// private encHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' })
	// private encHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
	// public encHeaders = { 'Content-Type': 'application/x-www-form-urlencoded' }

	
	// intercept(req: HttpRequest<string>, next: HttpHandler) : Observable<HttpEvent<any>> {
		
	// }
	public addNote(note: any): Observable<any> {

		// const endHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
		const headers = new HttpHeaders().set('Content-Type', 'application/json')

		return this.http.post('api/notes/add', note, { headers }).map((resp: HttpResponse<Object>) => {resp.ok; console.log(resp)})
	}

	public deleteNote(note: any): Observable<any> { 
		
		console.log('Delete Route in Notes Service', note);
		// let options = new RequestOptionsArgs({ headers: this.headers, body: note});

		return this.http.delete('api/notes/del/' + note._id).map((resp: HttpResponse<Object>) => resp.ok);
	}
	// 	let headers = new Headers({ 'Content-Type': 'application/json' });
	//  	// let options = new RequestOptionsArgs({ headers: headers, body: note });

	//  	console.log(options);
		
	// 	return this.http.delete('api/notes/del', options).map((resp: any) => {
	// 		console.log(resp);
	// 	})
	// }
}