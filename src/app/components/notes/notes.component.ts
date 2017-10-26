import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Note } from './note';
import { NotesService } from '../../services/notes-service';

@Component({
	selector: 'notes',
	templateUrl: 'notes.pug'
})

export class NotesComponent implements OnInit {
	notes: Note[];
	headers: HttpHeaders;

	constructor(private http: HttpClient, private notesService: NotesService) {
		// this.headers = new HttpHeaders({
		// 	'Content-Type': 'application/json;charset=utf-8',
		// 	Authorization: 'Bearer ${localStorage.token}'
		// });
	}
	
	ngOnInit(): void {
		// let headers = new HttpHeaders().set('Content-Type', 'application/json' Authorization, 'Bearer ${localStorage.token}')
		let headers = new HttpHeaders().set('Content-Type','application/json').set('x-access-token', localStorage.token).set('User', localStorage.userId);

		// let headers = new Headers({ 'Content-Type': 'application/json', Authorization: 'Bearer ${localStorage.token}'})
		console.log(headers);

		this.http.get('api/notes', {observe: 'response', headers: headers})
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
	
	}

}