import express from 'express';
import './config/db.config.js';
import cors from 'cors';
import Option from './route/option.route.js';
import Comment from './route/comments.route.js';

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/options', Option);
app.use('/api/comment', Comment);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
	console.log(`----------------------------------------------`);
	console.log(`Server started on http://localhost:${PORT} ✨`);
	console.log(`----------------------------------------------`);
});
server.on('error', (err) => console.log(err));
