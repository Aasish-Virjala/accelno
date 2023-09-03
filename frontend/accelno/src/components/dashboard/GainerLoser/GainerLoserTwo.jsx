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

const GainerLoser = () => {
	return (
		<div className="bg-white rounded-xl border border-lightSilver shadow-x">
			<div className="flex justify-between items-center text-darkGrey">
				<span className="font-bold text-sm">Today`s Gainer/Loser</span>
				<div className="flex items-center space-x-2">
					<span className="text-xs font-medium">Gainers</span>
					<MdKeyboardArrowDown className="text-black" />
				</div>
			</div>
			<div className="py-3 px-6 flex justify-between items-center bg-blue-500 text-sm font-semibold text-white">
				<span className="w-1/3">Company</span>
				<span className="w-1/3">Price ($)</span>
				<span className="w-16 bg-primaryGreen p-1 text-center rounded-lg text-white font-normal">Change %</span>
			</div>
			<div className="px-6">
				{data.map((item) => (
					<div key={item.id} className="py-3 flex justify-between items-center text-sm font-medium text-darkGrey">
						<span className="w-1/3">{item.name}</span>
						<span className="w-1/3">{item.price}</span>
						<span className="w-16 bg-primaryGreen p-1 text-center rounded-lg text-white font-normal">{item.change} %</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default GainerLoser;
