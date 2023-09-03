import { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import GainerLoser from './../components/dashboard/GainerLoser/GainerLoser';
import AvgMonthlyRevenue from '../components/dashboard/AvgMonthlyRevenue/AvgMonthlyRevenue';
import FiftyTwoWeeklyStats from '../components/dashboard/FiftyTwoWeeklyStats/FiftyTwoWeeklyStats';
import SingleStockChart from '../components/dashboard/SingleStockChart/SingleStockChart';
import ActiveStocks from '../components/dashboard/ActiveStocks/ActiveStocks';
import MarketChart from '../components/dashboard/MarketChart/MarketChart';
import HeatmapContainer from '../components/dashboard/HeatmapContainer/HeatmapContainer';
import FinancialTableFull from '../components/dashboard/FinancialTable/FinancialTableFull';
import SingleStockStackedChart from '../components/dashboard/SingleStockStackedChart/SingleStockStackedChart';

const Test = () => {
	const widgetSelectorData = [
		{
			id: 'widget-1',
			content: 'GainerLoser',
			dimensions: {
				small: { w: 1.7, h: 3.5 },
				medium: { w: 2.2, h: 4.4 },
				large: { w: 2.7, h: 4.5 },
			},
		},
		{
			id: 'widget-2',
			content: 'AvgMonthlyRevenue',
			dimensions: {
				small: { w: 2.8, h: 2.7 },
				medium: { w: 3.1, h: 3.1 },
				large: { w: 3.6, h: 3.6 },
			},
		},
		{
			id: 'widget-3',
			content: 'FiftyTwoWeeklyStats',
			dimensions: {
				small: { w: 1.7, h: 3.5 },
				medium: { w: 2.2, h: 4.4 },
				large: { w: 2.7, h: 4.5 },
			},
		},
		{
			id: 'widget-4',
			content: 'SingleStockChart',
			dimensions: {
				small: { w: 1.6, h: 2.8 },
				medium: { w: 1.9, h: 3.1 },
				large: { w: 2.1, h: 3.6 },
			},
		},
		{
			id: 'widget-5',
			content: 'ActiveStocks',
			dimensions: {
				small: { w: 1.6, h: 2.4 },
				medium: { w: 1.9, h: 2.9 },
				large: { w: 2.1, h: 3.2 },
			},
		},
		{
			id: 'widget-6',
			content: 'MarketChart',
			dimensions: {
				small: { w: 2.6, h: 2.5 },
				medium: { w: 3.1, h: 2.8 },
				large: { w: 3.6, h: 3.2 },
			},
		},
		{
			id: 'widget-7',
			content: 'Heatmap',
			dimensions: {
				small: { w: 1.7, h: 3.6 },
				medium: { w: 2.2, h: 3.9 },
				large: { w: 2.5, h: 3.9 },
			},
		},
		{
			id: 'widget-8',
			content: 'FinancialTableFull',
			dimensions: {
				small: { w: 2.4, h: 5.8 },
				medium: { w: 2.6, h: 7.4 },
				large: { w: 2.9, h: 9.4 },
			},
		},
		{
			id: 'widget-9',
			content: 'SingleStockStackedChart',
			dimensions: {
				small: { w: 2.3, h: 2.7 },
				medium: { w: 2.6, h: 3.2 },
				large: { w: 2.9, h: 3.8 },
			},
		},
	];

	const [whiteboardWidgets, setWhiteboardWidgets] = useState([]);
	const [isOverWhiteboard, setIsOverWhiteboard] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedWidgetSize, setSelectedWidgetSize] = useState({});

	console.log(selectedWidgetSize);

	const handleWhiteboardDrop = (e) => {
		e.preventDefault();
		setIsOverWhiteboard(false);

		const widgetId = e.dataTransfer.getData('widgetId');
		const widget = widgetSelectorData.find((widget) => widget.id === widgetId);

		if (widget && isOverWhiteboard) {
			handleWidgetDragStart(widget);
		}
		setSelectedWidgetSize(() => ({}));
	};

	const handleWhiteboardDragOver = (e) => {
		e.preventDefault();
		setIsOverWhiteboard(true);
	};

	const handleWhiteboardDragLeave = () => {
		setIsOverWhiteboard(false);
	};

	const handleWidgetDragStart = (widget) => {
		const newWidget = { ...widget, id: `${widget.id}-${Date.now()}`, size: selectedWidgetSize[widget.id] };
		setWhiteboardWidgets((prevWidgets) => [...prevWidgets, newWidget]);
		setIsModalOpen(false);
	};

	const handleWidgetDelete = (widgetId) => {
		setWhiteboardWidgets((prevWidgets) => prevWidgets.filter((widget) => widget.id !== widgetId));
	};

	const handleLayoutChange = (newLayout) => {
		setWhiteboardWidgets((prevWidgets) =>
			prevWidgets.map((widget) => {
				const layout = newLayout.find((layoutItem) => layoutItem.i === widget.id);
				return { ...widget, x: layout.x, y: layout.y, w: layout.w, h: layout.h };
			})
		);
	};

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col">
			<div
				className="min-h-screen p-4 bg-white "
				onDrop={handleWhiteboardDrop}
				onDragOver={handleWhiteboardDragOver}
				onDragLeave={handleWhiteboardDragLeave}
			>
				<GridLayout
					className="layout"
					layout={whiteboardWidgets.map((widget) => ({
						x: widget.x || 0,
						y: widget.y || 0,
						w: widget.dimensions[widget.size]?.w || 8,
						h: widget.dimensions[widget.size]?.h || 1,
						i: widget.id,
					}))}
					cols={6}
					isResizable={false}
					rowHeight={100}
					width={1200}
					onLayoutChange={handleLayoutChange}
				>
					{whiteboardWidgets.map((widget) => (
						<div key={widget.id} className="w-full h-full widget p-1 rounded-md cursor-move relative">
							<button
								className="absolute -top-1 -right-1 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-md hover:bg-red-600"
								onClick={() => handleWidgetDelete(widget.id)}
							>
								x
							</button>
							{console.log(widget)}
							{widget.content === 'GainerLoser' && <GainerLoser size={widget.size} />}
							{widget.content === 'AvgMonthlyRevenue' && <AvgMonthlyRevenue size={widget.size} />}
							{widget.content === 'FiftyTwoWeeklyStats' && <FiftyTwoWeeklyStats size={widget.size} />}
							{widget.content === 'SingleStockChart' && <SingleStockChart size={widget.size} />}
							{widget.content === 'ActiveStocks' && <ActiveStocks size={widget.size} />}
							{widget.content === 'MarketChart' && <MarketChart size={widget.size} />}
							{widget.content === 'Heatmap' && <HeatmapContainer size={widget.size} />}
							{widget.content === 'FinancialTableFull' && <FinancialTableFull size={widget.size} />}
							{widget.content === 'SingleStockStackedChart' && <SingleStockStackedChart size={widget.size} />}
						</div>
					))}
				</GridLayout>
			</div>
			{isModalOpen && (
				<div className="select-none bg-inputGrey h-[400px] w-[400px] fixed top-0 bottom-0 left-0 right-0 overflow-y-scroll p-4 rounded-xl shadow-md z-50">
					<div className="font-poppins mb-3">
						<h1 className=" text-xl font-bold">All Widget</h1>
						<span className="text-sm font-medium">Select the size of the widget and drag it to the screen</span>
					</div>
					<div className="flex flex-col space-y-3">
						{widgetSelectorData.map((widget) => (
							<div
								key={widget.id}
								className="widget p-4 border border-secondaryGrey rounded-md cursor-move flex  items-center justify-between"
								draggable={!!selectedWidgetSize[widget.id]}
								onDragStart={(e) => {
									e.dataTransfer.setData('widgetId', widget.id);
								}}
								onDragEnd={() => setIsModalOpen(false)}
							>
								{widget.content}
								<select
									className="bg-white border border-gray-300 rounded-md px-2 py-1"
									onChange={(e) => {
										setSelectedWidgetSize((prevSizes) => ({
											...prevSizes,
											[widget.id]: e.target.value,
										}));
									}}
								>
									<option value="">Select Size</option>
									<option value="small">Small</option>
									<option value="medium">Medium</option>
									<option value="large">Large</option>
								</select>
							</div>
						))}
					</div>
				</div>
			)}
			<div className="p-4 bg-white shadow-md mt-auto">
				<button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setIsModalOpen(true)}>
					Open Widget Modal
				</button>
			</div>
		</div>
	);
};

export default Test;
