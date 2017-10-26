import { Request, Response, NextFunction } from 'express';
import { Document, Model, model } from 'mongoose';
import { app } from '../app';
import * as jwt from 'jsonwebtoken';



import { User } from '../models/user';

export let auth = (req: Request, res: Response) => {
	User.findOne({ username: req.body.username }, (err: any, user) => {
		// console.log(user);
		if (err) throw err;
		
		if(!user) {
			res.json({ success: false, message: 'Authentication failed. User not found.'})
		} else if (user) {
			console.log(req.body);

			if (user.password != req.body.password) {
				res.json({ success: false, message: 'Authentication failed. Wrong password.'});
			}
			else {
				console.log(app.get('superSecret'));
				// const user1 = user.toString();
				let token = jwt.sign(user.toObject(), app.get('superSecret'), {
					expiresIn: 180000, // expires in 24 hours
					algorithm: 'HS256'
				});
				console.log(token);

				return res.json({
					success: true,
					message: 'Enjoy your token!',
					token: token,
					name: user.name,
					userid: user.id
				});
			}
		}
	})

}
export let logout = (req: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'You are logged out',
		token: '',
		name: ''
	})
}
export let use = (req: Request, res: Response, next: NextFunction) => {
	let token: string = req.body.token || req.query.token || req.headers['x-access-token'];

	console.log('THIS IS MY TOKEN: ', token);

	if (token) {
		jwt.verify(token, app.get('superSecret'), (err: any, decoded: any) => {
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.'});
			}
			else {
				// if everything is good, save to request for use in other routes
				// console.log(req);
				const result = decoded;
				// console.log(result);
				next();
			}
		})
	} else {
		return res.status(403).send({
			success: false, 
			message: 'No token provided.',
			token: '',
			name: ''
		})
	}
}