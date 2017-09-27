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
	nickName: String,
	email: String
});

export const User: Model<IUserModel> = model<IUserModel>('User', UserSchema);
