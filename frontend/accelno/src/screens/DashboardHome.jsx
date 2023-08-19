import RecentActivities from '../components/dashboard/RecentActivities/RecentActivities';
import StockTicker from '../components/dashboard/stockticker/StockTicker';
import AvgMonthlyRevenue from '../components/dashboard/AvgMonthlyRevenue/AvgMonthlyRevenue';
import Areachart from '../components/dashboard/charts/areachart/Areachart';
import SingleStockChart from '../components/dashboard/SingleStockChart/SingleStockChart';
import StackedAreachart from '../components/dashboard/charts/areachart/StackedAreachart';
import SingleStockStackedChart from '../components/dashboard/SingleStockStackedChart/SingleStockStackedChart';
import HeatmapContainer from '../components/dashboard/HeatmapContainer/HeatmapContainer';
import GainerLoser from '../components/dashboard/GainerLoser/GainerLoser';
import FiftyTwoWeeklyStats from '../components/dashboard/FiftyTwoWeeklyStats/FiftyTwoWeeklyStats';
import FinancialTableMini from '../components/dashboard/FinancialTable/FinancialTableMini';

const DashboardHome = () => {
	return (
		<div className="bg-primarySilver">
			<StockTicker />
			<div className="flex py-3 justify-center space-x-4">
				<div className="flex flex-col space-y-4">
					<div className="flex justify-center space-x-1">
						<div>
							<AvgMonthlyRevenue containerWidth={400} chartWidth={380} />
						</div>
						<div>
							<SingleStockStackedChart containerWidth={460} chartWidth={430} />
						</div>
					</div>

					<div className="flex flex-wrap space-x-3">
						<SingleStockChart />
						<SingleStockChart />
						<SingleStockChart />
					</div>
				</div>
				<div>
					<RecentActivities />
				</div>
			</div>
			<div className="flex flex-wrap justify-center space-x-1 pb-4 ">
				<HeatmapContainer />
				<GainerLoser />
				<FiftyTwoWeeklyStats />
				<FinancialTableMini />
			</div>
		</div>
	);
};

export default DashboardHome;
