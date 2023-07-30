import StockTicker from '../components/dashboard/stockticker/StockTicker';
import googleIcon from '../assets/dashboard/logos/google-chart.png';
import { MdKeyboardArrowDown } from 'react-icons/md';
import walletIcon from '../assets/dashboard/icons/wallet-icon.svg';
import viewIcon from '../assets/dashboard/icons/view-icon.svg';
import AvgMonthlyRevenue from '../components/dashboard/AvgMonthlyRevenue/AvgMonthlyRevenue';
import SingleStockChart from '../components/dashboard/SingleStockChart/SingleStockChart';

const TodaysMovers = () => {
	return (
		<div className="bg-primarySilver">
			<StockTicker />

			<div className="flex justify-center h-full space-x-6">
				<div className="flex flex-col justify-end w-[460px] space-y-6">
					<span className="text-[#66676D] text-xs font-inter font-medium">
						Track your stocks, Look at Watchlists created by the community
					</span>
					<div className="bg-white flex shadow-md rounded-md py-5 px-3  font-poppins text-sm text-primaryGrey justify-between items-center">
						<span className="font-bold">Hello Fynn, it&#39;s good to be back. </span>
						<div className="flex items-center space-x-1 border border-lightSilver p-2 rounded-md">
							<img src={googleIcon} alt="google-chart-icon" className="h-3" />
							<span className="font-semibold">Sync with Google Chart</span>
						</div>
					</div>
					<div className="flex font-poppins items-center justify-center space-x-5">
						<h1 className="font-bold text-md text-primaryGrey">Current Portfolio </h1>
						<div className="flex font-semibold text-sm space-x-2">
							<div className="border border-secondaryGrey px-3 py-2 rounded-md flex items-center space-x-2 ">
								<span>My savings </span>
								<span>
									<MdKeyboardArrowDown />
								</span>
							</div>
							<div className="px-3 py-2 rounded-md flex items-center space-x-2 bg-dashboardBlue">
								<span className="text-white">Add wallet </span>
								<img src={walletIcon} alt="" className="h-5" />
							</div>
						</div>
					</div>
					<div className="font-poppins flex justify-between bg-white px-5 py-8 rounded-md shadow-md">
						<div className="flex flex-col space-y-1">
							<h2 className="text-base font-bold text-searchbarGrey"> My holdings </h2>
							<h3 className="text-lg text-darkGrey font-bold"> $ 32.568,56 </h3>
							<div className="font-semibold text-sm">
								<span className=" font-bold text-searchbarGrey"> Today +95,86 </span>
								<span className="text-primaryGreen"> (+4.12%) </span>
							</div>
						</div>
						<div className="flex flex-col space-y-1">
							<h2 className="text-base font-bold text-searchbarGrey"> My revenue </h2>
							<h3 className="text-lg text-darkGrey font-bold"> $ 5.216,40 </h3>
							<div className="font-semibold text-sm">
								<span className=" font-bold text-searchbarGrey"> This month: -223,56 </span>
								<span className="text-red-700"> (-2.24%) </span>
							</div>
						</div>
					</div>
				</div>
				<div className=" w-[700px] font-poppins flex flex-col space-y-6 pt-14">
					<div className="flex items-center justify-between px-6">
						<h4 className="font-bold text-lg text-primaryGrey">Revenue Stats</h4>
						<div className="flex space-x-2 font-semibold text-sm">
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
					</div>
					<div className="flex justify-center">
						<AvgMonthlyRevenue containerWidth={680} chartWidth={450} />
					</div>
				</div>
			</div>
			<div className="font-poppins py-8 w-[1150px] mx-auto space-y-6">
				<div className="flex items-center justify-between">
					<h5 className="font-bold text-lg text-primaryGrey">Investment radar</h5>
					<div className="flex space-x-2 font-semibold text-sm">
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
				</div>
				<div className="flex space-x-1 justify-center">
					<SingleStockChart />
					<SingleStockChart />
					<SingleStockChart />
					<SingleStockChart />
				</div>
			</div>
		</div>
	);
};

export default TodaysMovers;
