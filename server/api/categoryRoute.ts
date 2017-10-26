import { Request, Response, NextFunction } from 'express';
import { Document, Model, model } from 'mongoose';
import mongoose = require('mongoose');

import { app } from '../app';
import * as jwt from 'jsonwebtoken';

import { Category } from '../models/category';

export let index = (req: Request, res: Response, next: NextFunction) => {
	Category.find({}, (err, categories) => {
		if (err) {
			return next(err);
		}
		res.status(200).json(categories);
	})
}

export let add = (req: Request, res: Response, categories: any) => {

	let a = new Category({
		name: 'salg'
	});

	a.save((err: any) => {
		if (err) throw err;
		res.json({ success: true, mes: 'category added', object: req.body });
	})
}