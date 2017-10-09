import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { NotesService } from '../../services/notes-service';

@Component({
	selector: 'addNote',
	templateUrl: 'addNote.pug'
})

export class AddNoteComponent implements OnInit {
	noteForm: FormGroup;
	title: string;
	body: string;

	constructor(private http: HttpClient, private notesService: NotesService) {}

	ngOnInit(): void {
		this.noteForm = new FormGroup({
			title: new FormControl(),
			body: new FormControl()
		})
	}

	addNote(noteForm: NgForm) {
		console.log(noteForm.value);
		this.title = noteForm.value.title;
		this.body = noteForm.value.body;

		this.notesService.addNote(noteForm.value).subscribe();
		// this.http.post('api/notes/add', noteForm.value).subscribe();
	}
}