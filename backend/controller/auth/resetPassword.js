const asyncHandler = require('express-async-handler');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { generateShortToken } = require('../../utils/generateToken.js');
const { sendResetEmail } = require('../../utils/emailSender.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// @desc    Forgot password
// @route   POST /api/v1/forgotpassword
// @access  Public

const forgotPasswordController = asyncHandler(async (req, res) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!emailRegex.test(req.body.email)) {
		return res.status(400).json({
			message: 'Invalid email',
		});
	}

	try {
		const { email } = req.body;

		const user = await prisma.user.findUnique({
			where: {
				email: email,
			},
		});

		if (!user) {
			return res.status(404).json({
				message: 'User not found',
			});
		}

		const { token } = generateShortToken(email);

		await prisma.user.update({
			where: {
				email: email,
			},
			data: {
				resetPasswordToken: token,
			},
		});

		const { info, error } = await sendResetEmail(token, email);

		if (error) {
			return res.status(500).json({
				message: 'Something went wrong',
				error: error,
			});
		}
		res.status(200).json({
			message: 'Email sent',
		});
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
});

// @desc    Reset password with token from email link
// @route   POST /api/v1/resetpassword
// @access  Public

const resetPasswordController = asyncHandler(async (req, res) => {
	const { token, password } = req.body;
	if (!token || !password) {
		return res.status(400).json({
			message: 'Please Try Again',
		});
	}

	try {
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

		if (!decodedToken) {
			return res.status(400).json({
				message: 'Invalid token',
			});
		}

		const user = await prisma.user.findFirst({
			where: {
				AND: [
					{
						email: decodedToken.email,
					},
					{
						resetPasswordToken: token,
					},
				],
			},
		});

		if (!user) {
			return res.status(404).json({
				message: 'User not found',
			});
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		await prisma.user.update({
			where: {
				email: decodedToken.email,
			},
			data: {
				password: hashedPassword,
				resetPasswordToken: null,
			},
		});

		res.status(200).json({
			message: 'Password updated',
		});
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
});

module.exports = { forgotPasswordController, resetPasswordController };
