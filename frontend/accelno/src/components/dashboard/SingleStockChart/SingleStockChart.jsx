import { MdArrowDropUp, MdArrowDropDown, MdInfoOutline } from 'react-icons/md';
import Areachart from '../charts/areachart/Areachart';
import Switch from 'react-switch';
import { useEffect, useState } from 'react';
import { useGetSingleStockDataQuery } from '../../../api/endpoints/widgetDataApi';
import { useGetChartQuery } from '../../../api/endpoints/widgetDataApi';
import { useDispatch } from 'react-redux';
import { deleteWidget } from '../../../redux/slices/widgetSlice';

const handleChange = () => {
	console.log('changed');
};

const SingleStockChart = ({ ratio, size, stock, widgetId, screen }) => {
	const { data, isSuccess } = useGetSingleStockDataQuery(stock);
	const { data: chartData } = useGetChartQuery(stock);
	const [updatedAt, setUpdatedAt] = useState('');
	const [changeType, setChangeType] = useState('');
	const [edit, setEdit] = useState(false);
	const dispatch = useDispatch();

	const handleWidgetDelete = (widgetId) => {
		dispatch(deleteWidget({ screen, widgetId }));
	};

	const checkPercentType = (value) => {
		const convertedValue = parseFloat(value);

		if (convertedValue < 0) {
			setChangeType('negative');
		} else if (convertedValue > 0) {
			setChangeType('positive');
		}
	};

	useEffect(() => {
		if (isSuccess) {
			const currentDate = new Date();

			// Get the hours, minutes, and seconds
			const hours = currentDate.getHours();
			const minutes = currentDate.getMinutes();

			// Determine whether it's AM or PM
			const amOrPm = hours >= 12 ? 'PM' : 'AM';

			// Convert the hours to 12-hour format
			const formattedHours = hours % 12 || 12;

			// Add leading zeros for minutes if needed
			const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

			// Create the formatted time string
			const formattedTime = `${formattedHours}:${formattedMinutes} ${amOrPm}`;

			setUpdatedAt(formattedTime);

			checkPercentType(data?.regularMarketChangePercent.fmt);
		}
	}, [isSuccess, data, changeType]);

	return (
		<div
			className={`${
				size === 'small' ? 'w-[300px]' : size === 'medium' ? 'w-[360px]' : 'w-[400px]'
			} bg-white space-y-3 px-3 py-1 font-inter rounded-xl border border-lightSilver shadow-md`}
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

			<div className={`${size === 'small' ? 'text-sm' : size === 'medium' ? 'text-md' : 'text-lg'} flex justify-between`}>
				<div className=" font-bold ">
					{ratio === 'sales' ? (
						<span className="text-darkGrey">Sales Growth</span>
					) : ratio === 'profit' ? (
						<span className="text-darkGrey">Profit Growth</span>
					) : (
						<div className="flex space-x-1">
							<span className="text-darkGrey">{data?.symbol}</span>
							<span className="text-secondarySilver">{data?.shortName}</span>
						</div>
					)}
				</div>
				<div className="space-x-1 font-bold">
					<span className="text-darkGrey">{data?.regularMarketPrice.raw}</span>
					<span className="text-secondarySilver">{data?.currency}</span>
				</div>
			</div>

			<div className={`${size === 'small' ? 'text-xs' : size === 'medium' ? 'text-sm' : 'text-md'}  flex justify-between font-semibold`}>
				<span className="text-secondarySilver items-center">Updated: {updatedAt}</span>
				<div className="flex justify-center ">
					<span className={`${changeType === 'positive' ? 'text-primaryGreen' : 'text-[#BB231B]'} `}>
						{data?.regularMarketChangePercent.fmt}
					</span>

					<span className="text-xl">
						{changeType === 'positive' ? <MdArrowDropUp className="text-primaryGreen" /> : <MdArrowDropDown className="text-[#BB231B]" />}
					</span>
				</div>
			</div>
			<Areachart size={size} data={chartData} changeType={data?.regularMarketChangePercent.raw} />
			<div className={`${size === 'small' ? 'text-xs' : size === 'medium' ? 'text-sm' : 'text-md'} flex justify-between`}>
				<div className="flex justify-between items-center space-x-2">
					<Switch
						onChange={handleChange}
						checked={true}
						onColor="#86d3ff"
						onHandleColor="#2693e6"
						handleDiameter={15}
						uncheckedIcon={false}
						checkedIcon={false}
						height={20}
						width={40}
					/>
					<span className="font-medium text-secondarySilver">Notifications</span>
				</div>
				<span className=" font-semibold text-secondarySilver">Advance Chart</span>
			</div>
		</div>
	);
};

export default SingleStockChart;
