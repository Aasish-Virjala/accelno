const asyncHandler = require('express-async-handler');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { createSubscription } = require('../../services/stripeService.js');

// @desc Create a new subscription for a user
// @route POST /api/v1/createsubscription
// @access Private

const stripeSubscriptionController = asyncHandler(async (req, res) => {
	// get user data from req.user which is set by the protect middleware
	const user_data = req.user;
	const { email, username } = user_data;
	const { planId } = req.body;
	// check if the planId coming from user is valid by checking if it exists in the database
	// if not, send error
	const plan = await prisma.plan.findFirst({
		where: {
			id: parseInt(planId),
		},
	});
	if (!plan) {
		res.status(400).json({ message: 'Invalid plan' });
	} else {
		// Now based on the planId, we can get the priceId from the database that matches the priceId in Stripe dashboard
		const priceId = plan.price_id;

		// check if user already has a stripe customer id stored in the database
		// if not, create a new stripe customer
		if (!user_data.stripe_customer_id) {
			// create a new stripe customer and subscription for the user
			// get the client secret and subscription id to be used in the frontend
			const { clientSecret, subscriptionId } = await createSubscription({ email, username, priceId });
			// update the user's subscription_id in the database as stripe_customer_id
			const updateUser = await prisma.user.update({
				where: {
					id: user_data.id,
				},
				data: {
					stripe_customer_id: subscriptionId,
				},
			});
			res.status(201).json({ clientSecret, subscriptionId });
		} else {
			// send back error if user already has a stripe_customer_id
			res.status(400).json({ message: 'User already has a subscription' });
		}
	}
});

module.exports = { stripeSubscriptionController };
