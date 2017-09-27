import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'addNote',
	templateUrl: 'addNote.pug'
})

export class AddNoteComponent implements OnInit {
	noteForm: FormGroup;
	title: string;
	body: string;

	constructor(private http: HttpClient) {}

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

		this.http.post('api/notes/add', noteForm.value).subscribe()
	}
}