import googleIcon from '../assets/dashboard/logos/google-chart.png';
import { MdKeyboardArrowDown } from 'react-icons/md';
import viewIcon from '../assets/dashboard/icons/view-icon.svg';
import StockTicker from '../components/dashboard/stockticker/StockTicker';
import ActiveStocks from '../components/dashboard/ActiveStocks/ActiveStocks';
import HeatmapContainer from '../components/dashboard/HeatmapContainer/HeatmapContainer';
import GainerLoser from '../components/dashboard/GainerLoser/GainerLoser';
import FiftyTwoWeeklyStats from '../components/dashboard/FiftyTwoWeeklyStats/FiftyTwoWeeklyStats';
import instrumentIcon from '../assets/dashboard/icons/instrument-icon.svg';
import editIcon from '../assets/dashboard/icons/editIcon.svg';
import MarketChart from '../components/dashboard/MarketChart/MarketChart';

const MarketDashboard = () => {
	return (
		<div>
			<StockTicker />
			<div className="w-[1080px] space-y-7 mx-auto">
				<div className="pb-6 pt-8 space-y-2">
					<div className="text-[#66676D] text-xs font-inter font-medium">
						Track your stocks, Look at Watchlists created by the community
					</div>
					<div className="w-[500px] bg-white flex shadow-md rounded-md py-5 px-3  font-poppins text-sm text-primaryGrey justify-between items-center">
						<span className="font-bold">Hello Fynn, it&#39;s good to be back. </span>
						<div className="flex items-center space-x-1 border border-lightSilver p-2 rounded-md">
							<img src={googleIcon} alt="google-chart-icon" className="h-3" />
							<span className="font-semibold">Sync with Google Chart</span>
						</div>
					</div>
				</div>
				<div className="flex font-poppins items-center justify-between space-x-5">
					<h1 className="font-bold text-xl text-primaryGrey">Market Dashboard </h1>
					<div className="flex font-semibold text-sm space-x-2">
						<div className="border border-secondaryGrey px-3 py-2 rounded-md flex items-center space-x-2 ">
							<span>My savings </span>
							<span>
								<MdKeyboardArrowDown />
							</span>
						</div>
						<div className="px-3 py-2 rounded-md flex items-center space-x-2 bg-dashboardBlue">
							<img src={viewIcon} alt="" className="h-5" />
							<span className="text-white">View report </span>
						</div>
					</div>
				</div>
				<div className="flex space-x-6">
					<div>
						<MarketChart />
					</div>
					<div>
						<ActiveStocks />
					</div>
				</div>
				<div className="flex font-poppins items-center justify-between space-x-5">
					<h1 className="font-bold text-lg text-primaryGrey">Market Overview </h1>
					<div className="flex font-semibold text-sm space-x-2">
						<div className="border border-secondaryGrey px-3 py-2 rounded-md flex items-center space-x-2 ">
							<span>
								<img src={editIcon} alt="" className="h-5" />
							</span>
							<span>Edit list </span>
							<span>
								<MdKeyboardArrowDown />
							</span>
						</div>
						<div className="px-3 py-2 rounded-md flex items-center space-x-2 bg-dashboardBlue">
							<img src={instrumentIcon} alt="" className="h-5" />
							<span className="text-white">Add Instrument </span>
						</div>
					</div>
				</div>
				<div className="flex space-x-6 pb-8">
					<HeatmapContainer />
					<GainerLoser />
					<FiftyTwoWeeklyStats />
				</div>
			</div>
		</div>
	);
};

export default MarketDashboard;
