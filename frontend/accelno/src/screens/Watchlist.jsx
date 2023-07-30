import SingleStockStackedChart from '../components/dashboard/SingleStockStackedChart/SingleStockStackedChart';
import StockTicker from '../components/dashboard/stockticker/StockTicker';
import { MdKeyboardArrowDown } from 'react-icons/md';
import viewIcon from '../assets/dashboard/icons/view-icon.svg';
import instrumentIcon from '../assets/dashboard/icons/instrument-icon.svg';
import FinancialTableFull from '../components/dashboard/FinancialTable/FinancialTableFull';
import Ratios from '../components/dashboard/Ratios/Ratios';

const Watchlist = () => {
	return (
		<div className="font-poppins h-full bg-primarySilver">
			<StockTicker />
			<div className="flex py-8 justify-center space-x-10">
				<div className="flex flex-col space-y-8 w-[650px]">
					<div className="space-y-8">
						<div className="flex space-x-2 font-semibold text-sm justify-end">
							<div className="border border-secondaryGrey px-3 py-2 rounded-md flex items-center space-x-2 ">
								<span>Monthly </span>
								<span>
									<MdKeyboardArrowDown />
								</span>
							</div>
							<div className="px-3 py-2 rounded-md flex items-center space-x-2 bg-dashboardBlue">
								<img src={viewIcon} alt="" className="h-5" />
								<span className="text-white">View report </span>
							</div>
						</div>

						<SingleStockStackedChart containerWidth={650} chartWidth={600} />
					</div>
					<div className="space-y-6">
						<div className="flex items-center justify-between">
							<h5 className="font-bold text-lg text-primaryGrey">Ratios</h5>
							<div className="flex space-x-2 font-semibold text-sm">
								<div className="border border-secondaryGrey px-3 py-2 rounded-md flex items-center space-x-2 ">
									<span>Edit list </span>
									<span>
										<MdKeyboardArrowDown />
									</span>
								</div>
								<div className="px-3 py-2 rounded-md flex items-center space-x-2 bg-dashboardBlue">
									<img src={instrumentIcon} alt="" className="h-5" />
									<span className="text-white">Add instrument </span>
								</div>
							</div>
						</div>
						<div className="flex space-x-4">
							<Ratios ratio="sales" />
							<Ratios ratio="profit" />
						</div>
					</div>
				</div>
				<div className="space-y-6">
					<h6 className="font-bold text-lg text-primaryGrey">Peer Comparisons</h6>

					<FinancialTableFull />
				</div>
			</div>
		</div>
	);
};

export default Watchlist;
