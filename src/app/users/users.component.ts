import { Component, Input, OnInit,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { User } from './user';
import { UsersService } from '../services/users-service';

@Component({
	selector: 'users',
	templateUrl: './users.pug',
	styleUrls: ['./users.scss']
})

export class UsersComponent implements OnInit {
	users: any[];
	

	constructor(private http: HttpClient, private usersService: UsersService) {}
	
	// @Input() newUser: User;
	
	ngOnInit(): void {
		// console.log(this.newUser);


		// this.http.get('/api/users', {observe: 'response'})
		// 	.subscribe((resp: any) => {
		// 		// console.log(resp);
		// 		// resp.body = users 
		// 		this.users = resp.body;
		// 		console.log(this.users);
		// 	})
		// this.http.get('/api/users').map(res => res.json()).subscribe(users => this.users = users);
		// this.http.get('/api/users').subscribe((res: Response) => this.users = res.json());
		this.getUsers();
		
		// console.log('Users are', this.users);

		// this.users = this.usersService.getUsers();
	}

	
	getUsers(): void {
		this.usersService.getUsers().subscribe(users => this.users = users) 
		// this.usersService.getUsers()
		
		// console.log('Users are', this.users);
		// this.users = this.usersService.getUsers();
	}
	



}