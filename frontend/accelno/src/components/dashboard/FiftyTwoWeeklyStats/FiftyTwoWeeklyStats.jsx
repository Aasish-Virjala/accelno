import { MdKeyboardArrowDown } from 'react-icons/md';

const data = [
	{
		id: 1,
		name: 'Apple Inc.',
		price: 170.44,
		change: 10,
	},
	{
		id: 2,
		name: 'Tesla Inc.',
		price: 163.22,
		change: 5,
	},
	{
		id: 3,
		name: 'Microsoft',
		price: 160.54,
		change: 8,
	},
	{
		id: 4,
		name: 'Google',
		price: 150.77,
		change: 7,
	},
	{
		id: 5,
		name: 'Facebook',
		price: 140.62,
		change: 6,
	},
];

const FiftyTwoWeeklyStats = ({ size }) => {
	return (
		<div
			className={`${
				size === 'small'
					? ' w-[320px] h-[360px]'
					: size === 'medium'
					? ' w-[420px] h-[460px]'
					: size === 'large'
					? ' w-[520px] h-[480px]'
					: ''
			} bg-white h-full py-2 font-inter rounded-xl border border-lightSilver shadow-xl `}
		>
			<div
				className={`${
					size === 'small' ? 'text-xs' : size === 'medium' ? 'text-sm' : size === 'large' ? 'text-md' : ''
				}  flex justify-between items-center p-4 text-darkGrey`}
			>
				<span className="font-bold ">52 Week High/Low</span>
				<div className="flex items-center space-x-2">
					<span className=" font-medium">High</span>
					<MdKeyboardArrowDown />
				</div>
			</div>
			<div
				className={`${
					size === 'small' ? 'text-xs py-2' : size === 'medium' ? 'text-sm py-4' : size === 'large' ? 'text-md py-5' : ''
				}   custom-stripe px-6 flex justify-between items-center bg-dashboardBlue font-semibold text-white`}
			>
				<span>Company</span>
				<span>Price ($)</span>
				<span>Change %</span>
			</div>

			<div className="pb-2">
				{data.map((item) => (
					<div
						key={item.id}
						className={`${
							size === 'small' ? 'text-xs py-3' : size === 'medium' ? 'text-sm py-5' : size === 'large' ? 'text-md py-6' : ''
						} px-6 flex justify-between items-center font-medium text-darkGrey`}
					>
						<span className="w-1/3">{item.name}</span>
						<span className="w-1/3">{item.price}</span>
						<span className="w-16 bg-primaryGreen p-1 text-center rounded-lg text-white font-normal">{item.change} %</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default FiftyTwoWeeklyStats;
