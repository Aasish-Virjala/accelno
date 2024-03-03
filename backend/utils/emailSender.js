const nodemailer = require('nodemailer');

const sendResetEmail = async (token, email) => {
	const resetLink = `${process.env.CLIENT_URL}/reset-password?token=${token}`;

	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.SENDER_EMAIL,
			pass: process.env.SENDER_PASSWORD,
		},
	});

	const mailOptions = {
		from: 'Accelno',
		to: email,
		subject: 'Reset Password',
		html: `<p>Click this link to reset your password: <a href=${resetLink}>${resetLink}</a></p>`,
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		return { info };
	} catch (error) {
		return { error };
	}
};

const sendVerificationEmail = async (token, email) => {
	const verifyLink = `${process.env.CLIENT_URL}/verify-email?token=${token}`;

	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.SENDER_EMAIL,
			pass: process.env.SENDER_PASSWORD,
		},
	});

	const mailOptions = {
		from: 'Accelno',
		to: email,
		subject: 'Verify Email',
		html: `<p>Click this link to verify your email: <a href=${verifyLink}>${verifyLink}</a></p>`,
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		return { info };
	} catch (error) {
		return { error };
	}
};

module.exports = { sendResetEmail, sendVerificationEmail };
