import { Request, Response } from 'express';
import { Document, Model, model } from 'mongoose';
import mongoose = require('mongoose');
mongoose.Promise = require('Bluebird');

import { Note } from '../models/note';

export let index = (req: Request, res: Response) => {
	Note.find({}, (err, notes) => {
		res.status(200).json(notes);
	});
} 

export let add = (req: Request, res: Response) => {
	req.body = new Note({
		title: req.body.title,
		body: req.body.body
	});
	// console.log(newNote);

	req.body.save((err: any) => {
		if (err) throw err;
		res.json({ success: true, mes: 'Note added', object: req.body });
	});
}

export let del = (req: Request, res: Response) => {
	// console.log('Delete Note Route');

	let noteId: string = req.params.id;
	// console.log(req.params.id);
	Note.findByIdAndRemove(noteId, (err, note) => {
		if (err) throw err;
		console.log(noteId + ' Note deleted');
		res.status(200).json(note);
	});
}