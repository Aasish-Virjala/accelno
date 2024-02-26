import Pricing from '../components/common/Pricing';
import { useState } from 'react';

export const plans = [
	{
		id: 1,
		title: 'Basic',
		price: '50',
	},
	{
		id: 2,
		title: 'Standard',
		price: '79',
	},
	{
		id: 3,
		title: 'Premium',
		price: '99',
	},
];

const PricingPlan = () => {
	const [selectedPlan, setSelectedPlan] = useState(null);

	return (
		<div className="w-full min-h-screen p-10 flex flex-col gap-12 auth-wrapper">
			<div className="space-x-2 text-center font-semibold text-4xl w-full">
				<span className="text-white">Free For</span>
				<span className="gradient-text">Our Early Supporters</span>
			</div>
			<Pricing setSelectedPlan={setSelectedPlan} selectedPlan={selectedPlan} plansPage={true} />
			<button
				disabled={!selectedPlan}
				className={`${selectedPlan ? 'gradient-bg' : 'gradient-border'}  text-lg rounded-xl text-white  mx-auto py-2 px-36 `}
			>
				Next
			</button>
		</div>
	);
};

export default PricingPlan;
