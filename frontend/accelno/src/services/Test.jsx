import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import TestStripe from './testStripe';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
	'pk_test_51NNHmGJUhZW4GUAoRi3RI4HVZHkIDXrNPmEqDfp3gklS6QAvimqQFR5l6CO9YGwJ3xrZro5vst73HfPBpS8ukezV00eyOH9o8E'
);
const Test = () => {
	return (
		<Elements stripe={stripePromise}>
			<TestStripe />
		</Elements>
	);
};

export default Test;
