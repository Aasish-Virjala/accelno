import RecentActivities from '../components/dashboard/RecentActivities/RecentActivities';
import StockTicker from '../components/dashboard/stockticker/StockTicker';
import SingleStockChart from '../components/dashboard/SingleStockChart/SingleStockChart';
import SingleStockStackedChart from '../components/dashboard/SingleStockStackedChart/SingleStockStackedChart';
import HeatmapContainer from '../components/dashboard/HeatmapContainer/HeatmapContainer';
import GainerLoser from '../components/dashboard/GainerLoser/GainerLoser';
import FiftyTwoWeeklyStats from '../components/dashboard/FiftyTwoWeeklyStats/FiftyTwoWeeklyStats';
import FinancialTableMini from '../components/dashboard/FinancialTable/FinancialTableMini';
import AvgMonthlyRevenue from '../components/dashboard/AvgMonthlyRevenue/AvgMonthlyRevenue';
import { useDrop } from 'react-dnd';
import GridLayout from 'react-grid-layout';
import { useState } from 'react';

const DashboardHome = () => {
	const [widgets, setWidgets] = useState([]);

	const [{ isOver }, drop] = useDrop({
		accept: 'WIDGET',
		drop: (item) => handleDrop(item),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	});

	const handleDrop = (item) => {
		const widgetTypeToAdd = item.widgetType;
		setWidgets((prevWidgets) => [...prevWidgets, widgetTypeToAdd]);
	};

	return (
		<div ref={drop} className="bg-primarySilver h-[2000px] w-full">
			<GridLayout className="grid grid-cols-6 gap-4">
				{widgets.map((widgetType, index) => (
					<div key={widgetType + index} className="  p-4 shadow-md">
						{widgetType === 'Test' && <h1> TEST</h1>}
						{/* Add more conditions for other widget components */}
					</div>
				))}
			</GridLayout>
		</div>
	);
};

export default DashboardHome;

{
	/*
			<StockTicker />
			<div className="flex py-3 justify-center space-x-4">
				<div className="flex flex-col space-y-4 pl-14">
					<div className="flex justify-center gap-2">
						<div>
							<AvgMonthlyRevenue  />
						</div>
						<div>
							<SingleStockStackedChart containerWidth={460} chartWidth={430} />
						</div>
					</div>

					<div className="flex flex-wrap gap-2">
						<SingleStockChart />
						<SingleStockChart />
						<SingleStockChart />
					</div>
				</div>
				<div>
					<RecentActivities />
				</div>
			</div>
			<div className="flex flex-wrap gap-2 pb-4 pl-14">
				<HeatmapContainer />
				<GainerLoser />
				<FiftyTwoWeeklyStats />
				<FinancialTableMini />
			</div>
			
			*/
}
