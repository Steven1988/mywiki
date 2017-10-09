import { Request, Response } from 'express';
import { Document, Model, model } from 'mongoose';
import * as jwt from 'jsonwebtoken';

import { User } from '../models/user';


export let auth = (req: Request, res: Response) => {
	User.findOne({ userName: req.body.username }, (err: any, user: any) => {
		if (err) throw err;
		
		if(!user) {
			res.json({ success: false, message: 'Authentication failed. User not found.'})
		} else if (user) {
			console.log(req.body);
		}
	})

}