import Barchart from '../charts/barchart/Barchart';
import { MdSaveAlt } from 'react-icons/md';

const AvgMonthlyRevenue = () => {
	return (
		<div className=" md:w-[530px] 2xl:w-[580px] px-4 pt-4 pb-1 font-inter rounded-xl border border-lightSilver  flex justify-center bg-white">
			<div className="flex flex-col space-y-7">
				<div className="flex flex-col space-y-1">
					<span className="font-poppins font-bold md:text-sm 2xl:text-md text-secondarySilver">Average Monthly Revenue</span>
					<span className="font-poppins md:text-sm 2xl:text-md text-darkGrey font-bold">$ 324,18 </span>
					<div className="flex font-inter font-semibold md:text-xs lg:text-md space-x-2">
						<span className="text-secondarySilver">m/m:-525,89</span>
						<span className="text-red-700">(-2.24%)</span>
					</div>
				</div>
				<div className="space-y-1">
					<div className="flex md:text-xs 2xl:text-md font-bold font-inter text-secondarySilver space-x-2">
						<span>Dividend Profit:</span>
						<span>$ 86,05</span>
					</div>
					<span className="md:text-xs 2xl:text-md text-secondarySilver font-medium">2 forthcoming dividends</span>
					<div className="flex md:text-xs 2xl:text-md font-bold font-inter text-secondarySilver space-x-2">
						<span>Transactions:</span>
						<span>4</span>
					</div>
				</div>
				<div className="flex  items-center font-semibold md:text-xs 2xl:text-md text-blue-700 space-x-2">
					<MdSaveAlt size={18} />
					<span className="">Download pdf report</span>
				</div>
			</div>
			<div className="">
				<Barchart />
			</div>
		</div>
	);
};

export default AvgMonthlyRevenue;
