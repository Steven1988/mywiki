import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Note } from './note';
import { NotesService } from '../services/notes-service';

@Component({
	selector: 'notes',
	templateUrl: 'notes.pug'
})

export class NotesComponent implements OnInit {
	notes: Note[];
	// headers: HttpHeaders;



	constructor(private http: HttpClient, private notesService: NotesService) {
		// this.headers = new HttpHeaders({
		// 	'Content-Type': 'application/json;charset=utf-8'
		// });
	}
	private headers = new Headers({ 'Content-Type': 'application/json' })
	
	// intercept(req: HttpRequest<string>, next: HttpHandler) : Observable<HttpEvent><any> {
	// 	const headers = {
	// 		'Content-Type': 'application/json';
	// 	}
		
	// }
	ngOnInit(): void {

		this.http.get('api/notes', {observe: 'response'})
			.subscribe((resp: any) => {
				console.log(resp.body);
				this.notes = resp.body;
			})

	}

	deleteNote(note: any): void {
		let body = 'Helloo'

		// let Theheaders = new Headers({ 'Content-Type': 'application/json' });
		// let options = new RequestOptionsArgs({ headers: Theheaders, body: note});
		this.notesService.deleteNote(note).subscribe(); 
	
		// console.log('delete function', note);
		// this.http.delete('api/notes/del', {headers: this.headers}).subscribe()
		// this.http.delete('api/notes/del', note).subscribe(result => console.log(result), error => console.log('error'));
	}

}