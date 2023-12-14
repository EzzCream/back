import { Schema, model } from 'mongoose';

const schema = new Schema({
	img: {
		type: String,
		require: true,
	},
	text: {
		type: String,
		require: true,
	},
});

export const optionModel = model('option', schema);
