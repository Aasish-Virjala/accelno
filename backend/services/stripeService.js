const Stripe = require('stripe');
const stripe = new Stripe('sk_test_26PHem9AhJZvU623DfE1x4sd');

const createSubscription = async (clientData) => {
	// create a stripe customer
	const customer = await stripe.customers.create({
		email: clientData.email,
		name: clientData.username,
		payment_method: 'card',
		invoice_settings: {
			default_payment_method: 'card',
		},
	});

	// get the price id from the client data
	const priceId = clientData.priceId;

	// create a subscription
	const subscription = await stripe.subscriptions.create({
		customer: customer.id,
		items: [{ price: priceId }],
		payment_settings: {
			payment_method_options: {
				card: {
					request_three_d_secure: 'any',
				},
			},
			payment_method_types: ['card'],
			save_default_payment_method: 'on_subscription',
		},
		expand: ['latest_invoice.payment_intent'],
	});

	// return the client secret and subscription id
	return {
		clientSecret: subscription.latest_invoice.payment_intent.client_secret,
		subscriptionId: subscription.id,
	};
};

module.exports = { createSubscription };
