// import mongoose from 'mongoose'
import { Document, Schema, Model, model } from 'mongoose'
import { IUser } from '../interfaces/user'

export interface IUserModel extends IUser, Document {
	// name(): string;

}

export let UserSchema: Schema = new Schema({
	createdAt: Date,
	userName: String, 
	name: String,
	password: String,
	nickName: String
});

export const User: Model<IUserModel> = model<IUserModel>('User', UserSchema);


// var mongoose = require('mongoose');


// const UserSchema = new mongoose.Schema({
// 	username: String,
// 	name: String, 
// 	password: String
// });

// const User = mongoose.model('User', UserSchema);
// module.exports = User;