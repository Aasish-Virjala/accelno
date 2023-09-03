import Widemarketchart from '../charts/areachart/widemarketchart';

const MarketChart = ({ size }) => {
	return (
		<div
			className={`${
				size === 'small' ? 'w-[500px]' : size === 'medium' ? 'w-[600px]' : 'w-[700px]'
			} p-3 font-inter space-y-3 bg-white shadow-lg rounded-md`}
		>
			<div className="flex justify-between">
				<div className="flex flex-col">
					<span className={`${size === 'small' ? 'text-sm' : size === 'medium' ? 'text-md' : 'text-lg'} text-primaryGrey font-bold `}>
						S&P 500
					</span>
					<div className="flex space-x-1 text-sm">
						<span>Return:</span>
						<span className="text-primaryGreen">5.5%</span>
					</div>
				</div>
				<div className={`${size === 'small' ? 'text-xs' : size === 'medium' ? 'text-sm' : 'text-md'} space-x-2 `}>
					<span className="text-darkGrey font-bold">4,136.25</span>
					<span className="text-primaryGreen">+75.03</span>
				</div>
				<div
					className={`${
						size === 'small' ? 'text-xs' : size === 'medium' ? 'text-sm' : 'text-md'
					}  flex text-sm bg-primarySilver h-9 space-x-6 px-2 rounded-md`}
				>
					<span className=" flex justify-center items-center">1D</span>
					<span className=" flex justify-center items-center">1W</span>
					<span className=" flex justify-center items-center">1M</span>
					<span className=" flex justify-center items-center">6M</span>
					<span className=" flex justify-center items-center">1Y</span>
				</div>
			</div>
			<Widemarketchart size={size} />
		</div>
	);
};

export default MarketChart;
