import { Request, Response } from 'express';
import { Document, Model, model } from 'mongoose';
import { app } from '../app';
import * as jwt from 'jsonwebtoken';



import { User } from '../models/user';

// const app = express();


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
					expiresIn: 180 // expires in 24 hours
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