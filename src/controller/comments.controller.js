import { commentModel } from '../model/comments.model.js';

export async function getComment(req, res) {
	try {
		const option = await commentModel.find();
		res.status(200).send(option);
	} catch (error) {
		console.log(error);
	}
}

export async function createComment(req, res) {
	try {
		await commentModel.create(req.body);
		res.status(200).send('Created');
	} catch (error) {
		console.log(error);
	}
}
