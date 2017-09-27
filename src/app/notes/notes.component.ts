import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Note } from './note';

@Component({
	selector: 'notes',
	templateUrl: 'notes.pug'
})

export class NotesComponent implements OnInit {
	notes: Note[];

	constructor(private http: HttpClient) {}

	ngOnInit(): void {

		this.http.get('api/notes', {observe: 'response'})
			.subscribe((resp: any) => {
				console.log(resp.body);
				this.notes = resp.body;
			})
	}

}