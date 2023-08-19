import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { initializeStripe, createPaymentMethod } from './stripe';
import axios from 'axios';

const TestStripe = () => {
	const stripe = useStripe();
	const elements = useElements();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		setLoading(true);
		setError(null);

		try {
			const { error, paymentMethod } = await stripe.createPaymentMethod({
				type: 'card',
				card: elements.getElement(CardElement),
			});

			if (error) {
				throw new Error(error.message);
			}

			const response = await axios.post(
				'http://localhost:3005/api/v1/createsubscription',
				{
					paymentMethodId: paymentMethod.id,
					planId: 3,
					// Add other necessary data like planId if needed
				},
				{ withCredentials: true }
			);

			console.log('Subscription created:', response.data);

			// Redirect to the Dashboard page after successful subscription
			history.push('/dashboard');
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<CardElement />
				{error && <div className="error">{error}</div>}
				<button type="submit" disabled={!stripe || loading}>
					{loading ? 'Processing...' : 'Subscribe'}
				</button>
			</form>
		</div>
	);
};

export default TestStripe;
