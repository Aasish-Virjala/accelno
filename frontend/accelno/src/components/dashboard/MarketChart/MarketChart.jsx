import Widemarketchart from '../charts/areachart/widemarketchart';
import { useGetMarketChartQuery } from '../../../api/endpoints/widgetDataApi';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWidget } from '../../../redux/slices/widgetSlice';
import { MdInfoOutline } from 'react-icons/md';

const MarketChart = ({ widgetId, screen }) => {
	const { data, error, isLoading } = useGetMarketChartQuery();
	const requiredData = data?.marketSummaryAndSparkResponse?.result[0];

	const [edit, setEdit] = useState(false);
	const dispatch = useDispatch();

	const handleWidgetDelete = (widgetId) => {
		dispatch(deleteWidget({ screen, widgetId }));
	};

	return (
		<div
			className={` w-[600px] 
			 p-3 font-inter space-y-3 bg-white shadow-lg rounded-md`}
		>
			<div className="flex justify-end pb-1 ">
				{!edit ? (
					<span className="cursor-pointer" onClick={() => setEdit(!edit)}>
						{<MdInfoOutline />}
					</span>
				) : (
					<button
						className=" bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-sm hover:bg-red-600"
						onClick={() => handleWidgetDelete(widgetId)}
					>
						x
					</button>
				)}
			</div>
			<div className="flex justify-between">
				<div className="flex flex-col">
					<span className={` text-md  text-primaryGrey font-bold `}>{requiredData?.shortName}</span>
					<div className="flex space-x-1 text-sm">
						<span>Return:</span>
						<span className="text-primaryGreen">5.5%</span>
					</div>
				</div>
				<div className="text-sm space-x-2">
					<span className="text-darkGrey font-bold">{requiredData?.regularMarketPreviousClose?.raw}</span>
					<span className="text-primaryGreen"></span>
				</div>
				<div className={`text-sm flex  bg-primarySilver h-9 space-x-6 px-2 rounded-md`}>
					<span className=" flex justify-center items-center">1D</span>
					<span className=" flex justify-center items-center">1W</span>
					<span className=" flex justify-center items-center">1M</span>
					<span className=" flex justify-center items-center">6M</span>
					<span className=" flex justify-center items-center">1Y</span>
				</div>
			</div>
			<Widemarketchart data={requiredData} />
		</div>
	);
};

export default MarketChart;
