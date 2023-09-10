/* eslint-disable react/prop-types */
import { useGetChartQuery, useGetSingleStockDataQuery } from '../../../api/endpoints/widgetDataApi';
import StackedAreachart from '../charts/areachart/StackedAreachart';
import { MdInfoOutline } from 'react-icons/md';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWidget } from '../../../redux/slices/widgetSlice';

const SingleStockStackedChart = ({ size, stock, widgetId, screen }) => {
	const { data: chartData } = useGetChartQuery(stock);
	const { data } = useGetSingleStockDataQuery(stock);

	const [edit, setEdit] = useState(false);
	const dispatch = useDispatch();

	const handleWidgetDelete = (widgetId) => {
		dispatch(deleteWidget({ screen, widgetId }));
	};

	return (
		<div
			className={`${
				size === 'small' ? '300px' : size === 'medium' ? '380px' : '460px'
			} bg-white rounded-xl border border-lightSilver   pt-3 pb-5 shadow-md`}
		>
			<div className="flex justify-end p-1 ">
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
			<div className="flex justify-center space-x-5 mb-4">
				<div className="flex space-x-1 font-bold text-sm">
					<span className="text-darkGrey">{data?.symbol}</span>
					<span className="text-secondarySilver">{data?.shortName}</span>
					<span
						className={`${Math.sign(parseFloat(data?.regularMarketChangePercent.fmt)) === 1 ? 'text-primaryGreen' : 'text-[#BB231B]'}  `}
					>
						{data?.regularMarketChangePercent.fmt}
					</span>
				</div>

				<span className="text-sm text-darkGrey font-medium">
					{data?.exchangeName} - {data?.currency}
				</span>
			</div>
			<StackedAreachart size={size} data={chartData} changeValue={data?.regularMarketChangePercent.fmt} />
		</div>
	);
};

export default SingleStockStackedChart;
