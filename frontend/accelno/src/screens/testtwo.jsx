import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const TestTwo = () => {
	// Data for the widget selector modal
	const widgetSelectorData = [
		{ id: 'widget-1', content: 'Widget 1' },
		{ id: 'widget-2', content: 'Widget 2' },
		{ id: 'widget-3', content: 'Widget 3' },
		{ id: 'widget-4', content: 'Widget 4' },
		{ id: 'widget-5', content: 'Widget 5' },
	];

	// State to manage widgets on the whiteboard
	const [whiteboardWidgets, setWhiteboardWidgets] = useState([]);
	// State to track whether a widget is being dragged over the whiteboard
	const [isOverWhiteboard, setIsOverWhiteboard] = useState(false);
	// State to control the widget selector modal
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Function to handle the drop event on the whiteboard
	const handleWhiteboardDrop = (e) => {
		e.preventDefault();
		setIsOverWhiteboard(false);

		const widgetId = e.dataTransfer.getData('widgetId');
		const widget = widgetSelectorData.find((widget) => widget.id === widgetId);

		if (widget && isOverWhiteboard) {
			handleWidgetDragStart(widget);
		}
	};

	// Function to handle the drag over event on the whiteboard
	const handleWhiteboardDragOver = (e) => {
		e.preventDefault();
		setIsOverWhiteboard(true);
	};

	// Function to handle the drag leave event on the whiteboard
	const handleWhiteboardDragLeave = () => {
		setIsOverWhiteboard(false);
	};

	// Function to add a widget to the whiteboard when dragged from the modal
	const handleWidgetDragStart = (widget) => {
		const newWidget = { ...widget, id: `${widget.id}-${Date.now()}` };
		setWhiteboardWidgets((prevWidgets) => [...prevWidgets, newWidget]);
		setIsModalOpen(false); // Close the modal after adding the widget
	};

	// Function to delete a widget from the whiteboard
	const handleWidgetDelete = (widgetId) => {
		setWhiteboardWidgets((prevWidgets) => prevWidgets.filter((widget) => widget.id !== widgetId));
	};

	// Function to handle layout change in the whiteboard
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
			{/* Whiteboard area */}
			<div
				className="p-4 bg-white mt-4 shadow-md"
				onDrop={handleWhiteboardDrop}
				onDragOver={handleWhiteboardDragOver}
				onDragLeave={handleWhiteboardDragLeave}
			>
				<h1 className="text-2xl font-bold mb-4">Whiteboard</h1>
				{/* GridLayout for whiteboard */}
				<GridLayout
					className="layout"
					layout={whiteboardWidgets.map((widget) => ({
						x: widget.x || 0,
						y: widget.y || 0,
						w: widget.w || 2,
						h: widget.h || 2,
						i: widget.id,
						minH: 2, // Minimum height (can be adjusted)
						minW: 2, // Minimum width (can be adjusted)
						maxH: 4, // Maximum height (can be adjusted)
						maxW: 4, // Maximum width (can be adjusted)
					}))}
					cols={6}
					rowHeight={100}
					width={1200}
					onLayoutChange={handleLayoutChange}
				>
					{/* Render whiteboard widgets */}
					{whiteboardWidgets.map((widget) => (
						<div key={widget.id} className="widget p-4 bg-green-200 rounded-md cursor-move relative">
							{widget.content}
							{/* Delete widget button */}
							<button
								className="absolute top-0 right-0 px-2 py-1 bg-red-500 text-white rounded-md"
								onClick={() => handleWidgetDelete(widget.id)}
							>
								Delete
							</button>
						</div>
					))}
				</GridLayout>
			</div>
			{/* Widget Modal */}
			{isModalOpen && (
				<div className="absolute bg-white p-4 rounded-md shadow-md">
					<h1 className="text-2xl font-bold mb-4">Widget Modal</h1>
					<div className="flex space-x-4">
						{/* Render widget selector data */}
						{widgetSelectorData.map((widget) => (
							<div
								key={widget.id}
								className="widget p-4 bg-blue-200 rounded-md cursor-pointer"
								draggable="true"
								onDragStart={(e) => {
									e.dataTransfer.setData('widgetId', widget.id);
								}}
								onDragEnd={() => setIsModalOpen(false)} // Close the modal when widget is dragged
							>
								{widget.content}
							</div>
						))}
					</div>
				</div>
			)}
			{/* Button to open the widget modal */}
			<div className="p-4 bg-white shadow-md mt-auto">
				<button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setIsModalOpen(true)}>
					Open Widget Modal
				</button>
			</div>
		</div>
	);
};

export default TestTwo;

{
	/*



import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import GainerLoser from './../components/dashboard/GainerLoser/GainerLoser'; // Import your GainerLoser component here
import AvgMonthlyRevenue from '../components/dashboard/AvgMonthlyRevenue/AvgMonthlyRevenue';
import FiftyTwoWeeklyStats from '../components/dashboard/FiftyTwoWeeklyStats/FiftyTwoWeeklyStats';

const Test = () => {
	const widgetSelectorData = [
		{ id: 'widget-1', content: 'GainerLoser' },
		{ id: 'widget-2', content: 'AvgMonthlyRevenue' },
		{ id: 'widget-3', content: 'FiftyTwoWeeklyStats' },
	];

	const [whiteboardWidgets, setWhiteboardWidgets] = useState([]);
	const [isOverWhiteboard, setIsOverWhiteboard] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleWhiteboardDrop = (e) => {
		e.preventDefault();
		setIsOverWhiteboard(false);

		const widgetId = e.dataTransfer.getData('widgetId');
		const widget = widgetSelectorData.find((widget) => widget.id === widgetId);

		if (widget && isOverWhiteboard) {
			handleWidgetDragStart(widget);
		}
	};

	const handleWhiteboardDragOver = (e) => {
		e.preventDefault();
		setIsOverWhiteboard(true);
	};

	const handleWhiteboardDragLeave = () => {
		setIsOverWhiteboard(false);
	};

	const handleWidgetDragStart = (widget) => {
		const newWidget = { ...widget, id: `${widget.id}-${Date.now()}` };
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
				className="p-4 bg-white mt-4 shadow-md"
				onDrop={handleWhiteboardDrop}
				onDragOver={handleWhiteboardDragOver}
				onDragLeave={handleWhiteboardDragLeave}
			>
				<h1 className="text-2xl font-bold mb-4">Whiteboard</h1>
				<GridLayout
					className="layout"
					layout={whiteboardWidgets.map((widget) => ({
						x: widget.x || 0,
						y: widget.y || 0,
						w: widget.w || 3,
						h: widget.h || 4,
						i: widget.id,
						minH: 4,
						minW: 2,
						maxH: 6,
						maxW: 5,
					}))}
					cols={6}
					rowHeight={100}
					width={1200}
					onLayoutChange={handleLayoutChange}
				>
					{whiteboardWidgets.map((widget) => (
						<div key={widget.id} className="widget p-1 bg-green-200 rounded-md cursor-move relative">
							{widget.content === 'GainerLoser' && <GainerLoser />}
							{widget.content === 'AvgMonthlyRevenue' && <AvgMonthlyRevenue />}
							{widget.content === 'FiftyTwoWeeklyStats' && <FiftyTwoWeeklyStats />}
						</div>
					))}
				</GridLayout>
			</div>
			{isModalOpen && (
				<div className="absolute bg-white p-4 rounded-md shadow-md">
					<h1 className="text-2xl font-bold mb-4">Widget Modal</h1>
					<div className="flex space-x-4">
						{widgetSelectorData.map((widget) => (
							<div
								key={widget.id}
								className="widget p-4 bg-blue-200 rounded-md cursor-pointer"
								draggable="true"
								onDragStart={(e) => {
									e.dataTransfer.setData('widgetId', widget.id);
								}}
								onDragEnd={() => setIsModalOpen(false)}
							>
								{widget.content}
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



*/
}
