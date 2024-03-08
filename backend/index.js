const express = require('express');
const app = express();
const router = require('./routes/routes.js');
const cookieParser = require('cookie-parser');
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js');
const cors = require('cors');

/*
const corsOpts = {
	origin: 'https://glistening-sprite-30779a.netlify.app/',

	methods: ['GET', 'POST'],

	allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOpts));
*/

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', 'https://glistening-sprite-30779a.netlify.app');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	res.header('Access-Control-Allow-Credentials', true);
	next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1', router);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3005;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
