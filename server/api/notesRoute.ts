import { Request, Response, NextFunction } from 'express';
import { Document, Model, model } from 'mongoose';
import mongoose = require('mongoose');

import { app } from '../app';
import * as jwt from 'jsonwebtoken';

mongoose.Promise = require('Bluebird');

import { Note } from '../models/note';
import { Category } from '../models/category';
import * as categoryRoutes  from './categoryRoute';



export let index = (req: Request, res: Response, next: NextFunction) => {
	Note.find({user: req.headers.user},(err, notes) => {
		// console.log('user Id is: ', req.headers.['user-Id']);
		if (err) {
			return next(err);
		}
		res.status(200).json(notes);
	});
} 

export let add = (req: Request, res: Response, next: NextFunction) => {
	if(!req.body) return res.sendStatus(400);

	let token = req.headers['x-access-token'];
	// let decoded: any = jwt.decode(token, app.get('superSecret'));
	let decoded: any = jwt.decode(token, {complete: true});

	// console.log('decoded token: ', decoded.payload);
	// console.log('token: ', token);

	// Check if the category added exist in the document. 
	Category.find({ name: req.body.category }, (err: any, data: any) => {
		let currentCategory: string;
		if (err) {
			return next(err);
		}
		if(data.length == 0) {
			let newCategory = new Category({
				name: req.body.category
			});
			// console.log('ADDED Cat:', newCategory);
			newCategory.save((err: any) => {
				if(err) throw err;	
			});
			currentCategory = newCategory._id
		} else {
			currentCategory = data[0]._id;
		}

		console.log('nuværende cat', currentCategory);

		let newNote = new Note({
			createdDate: req.body.date,
			title: req.body.title,
			body: req.body.body,
			user: decoded.payload,
			category: currentCategory
		});	
		newNote.save((err: any) => {
			if (err) throw err;
			res.json({ success: true, mes: 'Note added', object: req.body });
		});	
	})
}

export let del = (req: Request, res: Response) => {
	// console.log('Delete Note Route');

	let noteId: string = req.params.id;
	// console.log(req.params.id);
	Note.findByIdAndRemove(noteId, (err, note) => {
		if (err) throw err;
		// console.log(noteId + ' Note deleted');
		res.status(200).json(note);
	});
}