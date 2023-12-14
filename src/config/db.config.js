import mongoose from 'mongoose';

mongoose
	.connect('mongodb+srv://Oscar:CECyT7%3C3@cluster0.oo6bu.mongodb.net/web')
	.then(() => {
		console.log('Connected a Mongo ✨');
		console.log(`----------------------------------------------`);
	})
	.catch((err) => console.log(err));

export default mongoose;
