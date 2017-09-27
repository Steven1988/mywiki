import { Request, Response } from 'express';
import { Document, Model, model } from 'mongoose';

import { Note } from '../models/note';

export let index = (req: Request, res: Response) => {
	Note.find({}, (err, notes) => {
		res.status(200).json(notes);
	});
} 

export let add = (req: Request, res: Response) => {

	console.log(req.body);
	let newNote = new Note({
		title: req.body.title,
		body: req.body.body,
	})
	newNote.save( (err: any) => {
		if (err) throw err;
		res.json({ success: true, mes: 'Note added' })
	})

	// let stefan = new Note({
	// 	title: 'Stefan',
	// 	body: 'Totally new note in my system.'
	// })
	// stefan.save(function(err: any) {
	// 	if(err) throw err;
	// 	res.json({ success : true });
	// })
}