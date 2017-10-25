import { Request, Response } from 'express';
import { Document, Model, model } from 'mongoose';
import mongoose = require('mongoose');

import { app } from '../app';
import * as jwt from 'jsonwebtoken';

mongoose.Promise = require('Bluebird');

import { Note } from '../models/note';

export let index = (req: Request, res: Response) => {
	Note.find({}, (err, notes) => {
		res.status(200).json(notes);
	});
} 

export let add = (req: Request, res: Response) => {
	if(!req.body) return res.sendStatus(400);

	let token: string = req.body.token
	// console.log(req.body.token);

	let decoded = jwt.decode(token, app.get('superSecret'));
	// const decoded = jwt.decode(token, {complete: true});

	console.log('decoded token: ', decoded);

	let newNote = new Note({
		createdDate: req.body.date,
		title: req.body.title,
		body: req.body.body,
		user: decoded
	});
	// console.log(newNote);

	newNote.save((err: any) => {
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