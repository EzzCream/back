import { Schema, model } from 'mongoose';

const schema = new Schema({
	name: {
		type: String,
		require: true,
	},
	comentario: {
		type: String,
		require: true,
	},
});

export const commentModel = model('comment', schema);
