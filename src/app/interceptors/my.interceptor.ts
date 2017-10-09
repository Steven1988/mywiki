import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

// import { NotesService } from '../services/notes-service';

@Injectable()

export class MyIntercepter implements HttpInterceptor {

	// constructor(private http: HttpClient, private notesService: NotesService) {};

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		if(!req.headers.has('Content-Type')) {
			req = req.clone({ headers: req.headers.set('Content-Type', 'application/x-www-form-urlencoded') });
		}
		console.log(req);
		return next.handle(req);

		// return next.handle(req).do(evt => {
		// 	if (evt instanceof HttpResponse) {
		// 		console.log('---> status:', evt.status);
		// 		console.log('---> filter:', req.params.get('filter'));
		// 		}
		// });
	}
}