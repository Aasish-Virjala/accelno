import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWidget } from '../../../redux/slices/widgetSlice';
import { MdInfoOutline } from 'react-icons/md';
import { useGetTrendingStocksQuery } from '../../../api/endpoints/widgetDataApi';

const ActiveStocks = ({ size, widgetId, screen }) => {
	const { data, isLoading, isError, error } = useGetTrendingStocksQuery();
	const [edit, setEdit] = useState(false);
	const dispatch = useDispatch();
	const handleWidgetDelete = (widgetId) => {
		dispatch(deleteWidget({ screen, widgetId }));
	};
	return (
		<div
			className={`${
				size === 'small' ? 'w-[360]' : size === 'medium' ? 'w-[410]' : 'w-[460]'
			}   font-inter rounded-xl bg-white border border-lightSilver`}
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

			<div className="px-4 pb-3">
				<span className={`${size === 'small' ? 'text-xs' : size === 'medium' ? 'text-sm' : 'text-md'}  font-bold`}>
					{' '}
					Most Trending Stocks{' '}
				</span>
			</div>
			<div
				className={`${
					size === 'small' ? 'text-xs py-2' : size === 'medium' ? 'text-sm py-2' : 'text-md py-3'
				} custom-stripe  px-6 flex justify-between items-center bg-dashboardBlue  font-semibold text-white`}
			>
				<span>Company</span>
				<span>Score</span>
			</div>
			<div className="pb-2">
				{data?.map((item) => (
					<div
						key={item.id}
						className={`${
							size === 'small' ? 'py-2 text-xs' : size === 'medium' ? 'py-3 text-sm' : 'py-4 text-md'
						} px-6 flex justify-between items-center font-medium text-darkGrey`}
					>
						<span className="w-3/5">{item?.shortName}</span>
						<span className=" bg-primaryGreen py-1 px-2 text-center rounded-lg text-white font-normal">{item?.score} %</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default ActiveStocks;
