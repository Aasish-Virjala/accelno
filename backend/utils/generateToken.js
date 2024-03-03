const jwt = require('jsonwebtoken');

// generate token and send to client

const generateToken = (res, username) => {
	const token = jwt.sign({ username }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	});

	// send cookie with token to client

	res.cookie('jwt', token, {
		httpOnly: true,
		maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
		secure: true,
		sameSite: 'none',
	});

	// send token to client
	res.token = token;
};

const generateShortToken = (email) => {
	console.log('email from token func', email);
	const token = jwt.sign({ email }, process.env.JWT_SECRET, {
		expiresIn: '1h',
	});

	return { token };
};

module.exports = { generateToken, generateShortToken };
