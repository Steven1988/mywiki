import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
	selector: 'template-driven',
	templateUrl: './reactive-forms.pug'
})

export class ReactiveFormsComponent implements OnInit {
	// @ViewChild('myForm')
	private myForm: FormGroup;


	ngOnInit() {
		this.myForm = new FormGroup({
			'name': new FormControl(),
			'email': new FormControl(),
			'password': new FormControl(),
		}) 
	}
	register(myForm: NgForm) {
		console.log(myForm.value);
	} 

}