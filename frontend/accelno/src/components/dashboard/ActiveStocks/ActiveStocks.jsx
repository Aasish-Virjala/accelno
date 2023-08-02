const data = [
	{
		id: 1,
		name: 'Apple Inc.',
		volume: 50,
	},
	{
		id: 2,
		name: 'Tesla Inc.',
		volume: 43,
	},
	{
		id: 3,
		name: 'Apple Inc.',
		volume: 75,
	},
	{
		id: 4,
		name: 'Tesla Inc.',
		volume: 99,
	},
];

const ActiveStocks = () => {
	return (
		<div className=" w-[360px] font-inter rounded-xl border border-lightSilver">
			<div className="px-4 py-3">
				<span className="font-bold text-sm"> Most Active Stocks </span>
			</div>
			<div className="custom-stripe py-3 px-6 flex justify-between items-center bg-dashboardBlue text-sm font-semibold text-white">
				<span>Company</span>
				<span>Volume</span>
			</div>
			<div className="pb-2">
				{data.map((item) => (
					<div key={item.id} className=" py-3 px-6 flex justify-between items-center  text-sm font-medium text-darkGrey">
						<span className="">{item.name}</span>
						<span className=" bg-primaryGreen py-1 px-2 text-center rounded-lg text-white font-normal">{item.volume} %</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default ActiveStocks;
