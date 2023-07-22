import Barchart from '../charts/barchart/Barchart';
import { MdSaveAlt } from 'react-icons/md';

const AvgMonthlyRevenue = () => {
	return (
		<div className="monthly-revenue-container px-5 py-3 font-inter rounded-xl border border-lightSilver m-5 flex">
			<div className="flex flex-col space-y-7">
				<div className="flex flex-col space-y-1">
					<span className="font-poppins font-bold text-md text-secondarySilver">Average Monthly Revenue</span>
					<span className="font-poppins text-lg text-darkGrey font-bold">$ 324,18 </span>
					<div className="flex font-inter font-semibold text-sm space-x-2">
						<span className="text-secondarySilver">m/m:-525,89</span>
						<span className="text-red-700">(-2.24%)</span>
					</div>
				</div>
				<div className="space-y-1">
					<div className="flex text-sm font-bold font-inter text-secondarySilver space-x-4">
						<span>Dividend Profit:</span>
						<span>$ 86,05</span>
					</div>
					<span className="text-sm text-secondarySilver font-medium">2 forthcoming dividends</span>
					<div className="flex text-sm font-bold font-inter text-secondarySilver space-x-4">
						<span>Transactions:</span>
						<span>4</span>
					</div>
				</div>
				<div className="flex  items-center font-semibold text-md text-blue-700 space-x-2">
					<MdSaveAlt size={20} />
					<span className="">Download pdf report</span>
				</div>
			</div>
			<Barchart />
		</div>
	);
};

export default AvgMonthlyRevenue;
