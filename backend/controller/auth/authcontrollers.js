const asyncHandler = require('express-async-handler');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const { generateToken, generateShortToken } = require('../../utils/generateToken.js');
const { sendVerificationEmail } = require('../../utils/emailSender.js');
const jwt = require('jsonwebtoken');

// @desc Register a new user
// @route POST /api/v1/registeruser
// @access Public
// CHECKS IF USER EXISTS, IF NOT, CREATES USER

const registerUserController = asyncHandler(async (req, res) => {
	const { fullName, username, email, password } = req.body;
	const earlyUser = process.env.EARLY_USER;
	const isStudent = email.includes('.edu');

	try {
		const checkUser = await prisma.user.findFirst({
			where: {
				OR: [{ email }, { username }],
			},
		});
		if (checkUser) {
			res.status(400).json({ message: 'User already exists' });
		} else {
			const hashedPassword = await bcrypt.hash(password, 10);
			// Verify if user is a student or regular user by checking if the email contains .edu

			let data = {
				fullName,
				username,
				email,
				password: hashedPassword,
			};

			if (!!earlyUser) {
				data.earlyUser = true;
			}

			if (isStudent) {
				data.isStudent = true;
			}

			await prisma.user.create({
				data: data,
			});

			// generate token and send a verification email to the user

			const { token } = generateShortToken(email);

			await prisma.user.update({
				where: {
					email: email,
				},
				data: {
					verificationToken: token,
				},
			});

			// send verification email to user

			const { info, error } = await sendVerificationEmail(token, email);

			if (error) {
				return res.status(500).json({
					message: 'Something went wrong',
					error: error,
				});
			}

			res.status(201).json({
				message: 'Verification email sent',
				info,
			});
		}
	} catch (err) {
		res.status(500).json({ message: 'Internal server error', error: err.message });
	}
});

// @desc Login an existing user
// @route POST /api/v1/loginuser
// @access Public
// CHECKS IF USER EXISTS, IF SO, CHECKS PASSWORD, IF CORRECT, GENERATES TOKEN AND SENDS TO CLIENT AS COOKIE

const loginUserController = asyncHandler(async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = await prisma.user.findFirst({
			where: {
				OR: [
					{
						username: username,
					},
					{
						email: username,
					},
				],
			},
		});
		if (!user) {
			return res.status(400).json({ message: 'User does not exist' });
		} else {
			if (!user.isVerified) return res.status(400).json({ message: 'User is not verified' });
			const checkPassword = await bcrypt.compare(password, user.password);
			if (!checkPassword) {
				return res.status(400).json({ message: 'Invalid Credentials' });
			} else {
				// util function to generate token and send to client
				generateToken(res, username);
				const token = res.token;
				// check if the user has active subscription and send it to client
				const isActive = user.stripe_subscription_status === 'active' ? true : false;
				const isStudent = user.isStudent;
				const earlyUser = user.earlyUser;
				res.status(200).json({ message: 'Logged in', status: 'success', token, isActive, isStudent, earlyUser });
			}
		}
	} catch (err) {
		res.status(500).json({ message: 'Internal server error', error: err.message });
	}
});

// @desc Verify user email
// @route POST /api/v1/verifyemail
// @access Public

const verifyUserEmailController = asyncHandler(async (req, res) => {
	const { token } = req.body;

	if (!token) {
		return res.status(400).json({
			message: 'Invalid token',
		});
	}

	try {
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
		console.log('decodedToken', decodedToken);

		if (!decodedToken) {
			return res.status(400).json({
				message: 'Invalid token',
			});
		}

		const isTokenExpired = Date.now() >= decodedToken.exp * 1000;

		if (isTokenExpired) {
			return res.status(409).json({
				message: 'Token expired',
			});
		}

		const user = await prisma.user.findFirst({
			where: {
				AND: [
					{
						email: decodedToken.email,
					},
					{
						verificationToken: token,
					},
				],
			},
		});

		if (!user) {
			return res.status(404).json({
				message: 'Invalid token or user not found',
			});
		}

		await prisma.user.update({
			where: {
				id: user.id,
			},
			data: {
				verificationToken: null,
				isVerified: true,
			},
		});

		res.status(200).json({
			message: 'User verified',
		});
	} catch (error) {
		res.status(500).json({
			message: 'Internal server error',
			error: error.message,
		});
	}
});

// @desc Update user status
// @route PUT /api/v1/early-user
// @access Private

// The following controller is only used to update an early user's subscription to active state
// without having to go through the payment process. This is only used for testing & presentation purposes.
// This will only be used if .env  EARLY_USER is set to true and the frontend has a way to trigger this endpoint.
// This is not a part of the actual application flow.

const earlyUserStatusController = asyncHandler(async (req, res) => {
	if (process.env.EARLY_USER === 'false') {
		return res.status(400).json({ message: 'Early user is not enabled' });
	}

	const { username } = req.user;

	try {
		const user = await prisma.user.findFirst({
			where: {
				username,
			},
		});
		if (!user) {
			res.status(400).json({ message: 'User does not exist' });
		} else {
			await prisma.user.update({
				where: {
					username,
				},
				data: {
					stripe_subscription_status: 'active',
				},
			});

			res.status(200).json({ message: 'User is now active', status: 'success' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Internal server error', error: error.message });
	}
});

module.exports = { registerUserController, loginUserController, verifyUserEmailController, earlyUserStatusController };
