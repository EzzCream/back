import { optionModel } from '../model/option.model.js';

export async function getOption(req, res) {
	try {
		const option = await optionModel.find();
		res.status(200).send(option);
	} catch (error) {
		console.log(error);
	}
}

export async function createOption(req, res) {
	try {
		await optionModel.create(req.body);
		res.status(200).send('Created');
	} catch (error) {
		console.log(error);
	}
}
