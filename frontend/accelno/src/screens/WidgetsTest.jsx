import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import GainerLoser from '../components/dashboard/GainerLoser/GainerLoser';
import AvgMonthlyRevenue from '../components/dashboard/AvgMonthlyRevenue/AvgMonthlyRevenue';
import FiftyTwoWeeklyStats from '../components/dashboard/FiftyTwoWeeklyStats/FiftyTwoWeeklyStats';
import SingleStockChart from '../components/dashboard/SingleStockChart/SingleStockChart';
import ActiveStocks from '../components/dashboard/ActiveStocks/ActiveStocks';
import MarketChart from '../components/dashboard/MarketChart/MarketChart';
import HeatmapContainer from '../components/dashboard/HeatmapContainer/HeatmapContainer';
import FinancialTableFull from '../components/dashboard/FinancialTable/FinancialTableFull';
import SingleStockStackedChart from '../components/dashboard/SingleStockStackedChart/SingleStockStackedChart';
import { selectSelectedWidgets, addWidget, deleteWidget, setWidgets } from '../redux/slices/widgetSlice';
import Welcome from '../components/dashboard/welcome/Welcome';
import { selectModalState } from '../redux/slices/modalSlice';
import { openModal, closeModal } from '../redux/slices/modalSlice';
import ClipLoader from 'react-spinners/ClipLoader';
import { FetchWidgetData } from '../api/fetchWidgetData';

const WidgetsComponent = () => {
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

	const dispatch = useDispatch();
	const selectedWidgets = useSelector(selectSelectedWidgets);
	const widgetData = useSelector((state) => state.widgetData);
	const isModalOpen = useSelector(selectModalState);
	const [isLoading, setIsLoading] = useState(true);
	const [selectedWidgetSize, setSelectedWidgetSize] = useState({});
	const [isOverWhiteboard, setIsOverWhiteboard] = useState(false);

	// Load widgets data from local storage when component mounts
	useEffect(() => {
		const storedWidgets = loadWidgetsFromLocalStorage();
		if (storedWidgets.length > 0) {
			dispatch(setWidgets(storedWidgets));
		}
		setIsLoading(false);
	}, [dispatch]);

	// Save widgets data to local storage whenever it changes
	useEffect(() => {
		saveWidgetsToLocalStorage(selectedWidgets);
	}, [selectedWidgets]);

	// Fetch data for each selected widget when component mounts or selected widgets change
	useEffect(() => {
		// Fetch data for each selected widget
		selectedWidgets.forEach((widget) => {
			FetchWidgetData('AAPL', widget.id, dispatch); // Call the hook to fetch data
		});
	}, [selectedWidgets, dispatch]);

	// Save widgets data to local storage
	const saveWidgetsToLocalStorage = (widgets) => {
		localStorage.setItem('selectedWidgets', JSON.stringify(widgets));
	};

	// Load widgets data from local storage
	const loadWidgetsFromLocalStorage = () => {
		const storedWidgets = localStorage.getItem('selectedWidgets');
		return storedWidgets ? JSON.parse(storedWidgets) : [];
	};

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
		dispatch(addWidget(newWidget));
		dispatch(closeModal());
	};

	const handleWidgetDelete = (widgetId) => {
		dispatch(deleteWidget(widgetId));
	};

	const handleLayoutChange = (newLayout) => {
		dispatch(
			setWidgets(
				selectedWidgets.map((widget) => {
					const layout = newLayout.find((layoutItem) => layoutItem.i === widget.id);
					return { ...widget, x: layout.x, y: layout.y, w: layout.w, h: layout.h };
				})
			)
		);
	};

	const override = {
		display: 'block',
		margin: '0 auto',
		borderColor: '#2151C0',
	};

	return (
		<>
			{isLoading ? (
				<div className="min-h-screen flex items-center justify-center">
					<ClipLoader color="#fff" loading={isLoading} cssOverride={override} size={50} aria-label="Loading Spinner" data-testid="loader" />
				</div>
			) : selectedWidgets.length === 0 && !isModalOpen ? (
				<Welcome />
			) : (
				<div className="min-h-screen bg-white flex flex-col pl-7">
					<button
						className="bg-dashboardBlue py-3 px-4 rounded-md mt-3 text-white font-semibold mx-auto"
						onClick={() => dispatch(openModal())}
					>
						{' '}
						Add Widget{' '}
					</button>
					<div
						className="min-h-screen p-4 bg-white"
						onDrop={handleWhiteboardDrop}
						onDragOver={handleWhiteboardDragOver}
						onDragLeave={handleWhiteboardDragLeave}
					>
						<GridLayout
							className="layout"
							layout={selectedWidgets.map((widget) => ({
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
							{selectedWidgets.map((widget) => (
								<div key={widget.id} className="w-full h-full widget p-1 rounded-md cursor-move relative">
									<button
										className="absolute -top-1 -right-1 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-md hover:bg-red-600"
										onClick={() => handleWidgetDelete(widget.id)}
									>
										x
									</button>
									{widget.content === 'GainerLoser' && widgetData[widget.id] && (
										<GainerLoser size={widget.size} data={widgetData[widget.id]} />
									)}
									{widget.content === 'AvgMonthlyRevenue' && widgetData[widget.id] && (
										<AvgMonthlyRevenue size={widget.size} data={widgetData[widget.id]} />
									)}
									{widget.content === 'FiftyTwoWeeklyStats' && widgetData[widget.id] && (
										<FiftyTwoWeeklyStats size={widget.size} data={widgetData[widget.id]} />
									)}
									{widget.content === 'SingleStockChart' && widgetData[widget.id] && (
										<SingleStockChart size={widget.size} data={widgetData[widget.id]} />
									)}
									{widget.content === 'ActiveStocks' && widgetData[widget.id] && (
										<ActiveStocks size={widget.size} data={widgetData[widget.id]} />
									)}
									{widget.content === 'MarketChart' && widgetData[widget.id] && (
										<MarketChart size={widget.size} data={widgetData[widget.id]} />
									)}
									{widget.content === 'Heatmap' && widgetData[widget.id] && (
										<HeatmapContainer size={widget.size} data={widgetData[widget.id]} />
									)}
									{widget.content === 'FinancialTableFull' && widgetData[widget.id] && (
										<FinancialTableFull size={widget.size} data={widgetData[widget.id]} />
									)}
									{widget.content === 'SingleStockStackedChart' && widgetData[widget.id] && (
										<SingleStockStackedChart size={widget.size} data={widgetData[widget.id]} />
									)}
								</div>
							))}
						</GridLayout>
					</div>
				</div>
			)}

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
								onDragEnd={() => dispatch(closeModal())}
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
		</>
	);
};

export default WidgetsComponent;
