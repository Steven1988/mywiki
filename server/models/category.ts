import { Document, Schema, Model, model } from 'mongoose';


import { ICategory } from '../interfaces/ICategory';

export interface ICategoryModel extends ICategory, Document {}
export let CategorySchema: Schema = new Schema({
	name: String,
	user: { type: Schema.Types.ObjectId, ref: 'User' }

})

export const Category: Model<ICategoryModel> = model<ICategoryModel>('Category', CategorySchema);