import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { NotesService } from '../../services/notes-service';
import { NewNote } from './newNote';


@Component({
	selector: 'addNote',
	templateUrl: 'addNote.pug'
})

export class AddNoteComponent implements OnInit {
	noteForm: FormGroup;
	title: string;
	body: string;
	date: string;
	currentUser: object;

	newNote: NewNote

	constructor(private http: HttpClient, private notesService: NotesService) {}

	ngOnInit(): void {
		this.noteForm = new FormGroup({
			title: new FormControl(),
			body: new FormControl()
		})
	}

	addNote(noteForm: NgForm) {
		console.log(noteForm.value);
		this.newNote = {
			title: noteForm.value.title,
			body: noteForm.value.body,
			date: Date(),
			token: localStorage.token,
			user: localStorage.userId
		}
		console.log(this.newNote);
		this.notesService.addNote(this.newNote).subscribe();
		// this.http.post('api/notes/add', noteForm.value).subscribe();
	}
}