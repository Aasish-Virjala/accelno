import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
	'pk_test_51NNHmGJUhZW4GUAoRi3RI4HVZHkIDXrNPmEqDfp3gklS6QAvimqQFR5l6CO9YGwJ3xrZro5vst73HfPBpS8ukezV00eyOH9o8E'
);

// Initialize Stripe and return a promise
export const initializeStripe = async () => {
	const stripe = await stripePromise;
	return stripe;
};

// Create a Payment Method
export const createPaymentMethod = async (stripe, cardElement) => {
	const { error, paymentMethod } = await stripe.createPaymentMethod({
		type: 'card',
		card: cardElement,
	});

	if (error) {
		throw new Error(error.message);
	}

	return paymentMethod;
};


