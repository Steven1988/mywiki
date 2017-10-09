import { Request, Response } from 'express'
import { Document, Model, model } from 'mongoose'

import { User } from '../models/user';

export let index = (req: Request, res: Response) => {
	User.find({}, (err, users) => {
		res.status(200).json(users);
		// console.log(users);
	});
}

export let user = (req: Request, res: Response) => {
	User.findById({_id: req.params.id }, function(err, user) {
		console.log(req.params.id);
		res.status(200).json(user);

	})
}

export let add = (req: Request, res: Response) => {
	console.log(req.body.username);
	// res.json({ succuss: true })

	// let stefan = new User({
	// 	name: 'Stefan',
	// 	password: '1234'
	// })
	// stefan.save(function(err) {
	// 	if(err) throw err;
	// 	res.json({ success : true });
	// })

	req.body = new User({
		username: req.body.username,
		name: req.body.name,
		password: req.body.password,
		email: req.body.email
	})
	req.body.save((err: any) => {
		if(err) throw err;
		res.json({ success : true });
	})
	// db.collection.insert()



	// db.collection('inserts').insertOne(user, function(err, r) {
	// 	assert.equal(null, err);
	// 	assert.equal(1, r.insertCount);

	// })
}

export let del = (req: Request, res: Response) => {
	// console.log('Delete route');
	// let id: string = '598c4fc51917ac1858856ce6'

	User.findByIdAndRemove(req.params.id, (err, user) => {
		if (err) throw err;
		console.log(req.params.id + ' User deleted');
		res.status(200).json(user);
		
	})
}
