import { Document, Schema, Model, model } from 'mongoose';

import { INote } from '../interfaces/note';

export interface INoteModel extends INote, Document {}

export let NoteSchema: Schema = new Schema({
	createdDate: Date,
	title: String,
	body: String,

});

export const Note: Model<INoteModel> = model<INoteModel>('Note', NoteSchema);