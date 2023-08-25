import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CARD_ELEMENT_OPTIONS = {
	style: {
		base: {
			color: '#303030',
			fontFamily: 'Inter, sans-serif',
			fontSmoothing: 'antialiased',
			fontSize: '14px',
			'::placeholder': {
				color: '#303030',
			},
		},
		invalid: {
			color: '#fa755a',
			iconColor: '#fa755a',
		},
		input: {
			colorBackground: '#fa755a',
		},
	},
};

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		navigate('/dashboard');

		/*

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

			// Use the client_secret received in the response to confirm the payment
			const { clientSecret } = response.data;

			const result = await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			});

			if (result.error) {
				throw new Error(result.error.message);
			}

			// Payment was successful
			console.log('Payment successful:', result.paymentIntent);

			// You can perform further actions here, such as redirecting to a success page
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
		*/
	};

	return (
		<div className="max-w-lg mx-auto">
			<form onSubmit={handleSubmit}>
				<div className="mb-8">
					<CardElement options={CARD_ELEMENT_OPTIONS} className="p-3 rounded-md bg-[#E2E8F0]" />
				</div>
				{error && <div className="text-red-500 mb-4">{error}</div>}
				<div className="flex justify-end items-center space-x-8 pt-6 border-t  border-lightSilver">
					<span className=" font-inter text-sm text-[#4A5568] cursor-pointer">Cancel Order</span>

					<button
						type="submit"
						disabled={!stripe || loading}
						className={` bg-[#3182CE] font-semibold font-poppins text-sm  text-white py-4 px-6 rounded-md ${
							loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
						}`}
					>
						{loading ? 'Processing...' : 'Complete Order'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default PaymentForm;

/*

	<form onSubmit={handleSubmit}>
				<CardElement options={CARD_ELEMENT_OPTIONS} />
				{error && <div className="error">{error}</div>}
				<button type="submit" disabled={!stripe || loading}>
					{loading ? 'Processing...' : 'Subscribe'}
				</button>
			</form>

*/
