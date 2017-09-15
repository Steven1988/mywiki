import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
	result: string;

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.http.get('/api').subscribe(data => {
			console.log(data);
			// this.result = data;
		
		});	
	}
}
