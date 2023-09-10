import { MdKeyboardArrowDown, MdInfoOutline } from 'react-icons/md';
import { useGetMoversQuery } from '../../../api/endpoints/widgetDataApi';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWidget } from '../../../redux/slices/widgetSlice';

const GainerLoser = ({ size, stock, widgetId, screen }) => {
	const { data: gainersData } = useGetMoversQuery('gainers');
	const { data: losersData } = useGetMoversQuery('losers');
	const [isGainer, setIsGainer] = useState(true);
	const [edit, setEdit] = useState(false);
	const dispatch = useDispatch();
	const requiredData = isGainer ? gainersData : losersData;

	const handleWidgetDelete = (widgetId) => {
		dispatch(deleteWidget({ screen, widgetId }));
	};

	return (
		<div
			className={`bg-white font-inter rounded-xl border border-lightSilver shadow-md py-1 ${
				size === 'small'
					? ' w-[320px] h-[420px]'
					: size === 'medium'
					? ' w-[420px] h-[500px]'
					: size === 'large'
					? ' w-[520px] h-[520px]'
					: ''
			} `}
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

			<div
				className={`${
					size === 'small' ? 'text-xs' : size === 'medium' ? 'text-sm' : size === 'large' ? 'text-md' : ''
				} flex justify-between items-center text-darkGrey pb-4 px-3`}
			>
				<span className="font-bold  ">Today&#39;s Gainer/Loser</span>
				<div className="flex items-center space-x-2 cursor-pointer" onClick={() => setIsGainer(!isGainer)}>
					<span className=" font-medium">{isGainer ? 'Gainers' : 'Losers'}</span>
					<MdKeyboardArrowDown />
				</div>
			</div>
			<div
				className={`${
					size === 'small' ? 'text-xs py-2' : size === 'medium' ? 'text-sm py-3' : size === 'large' ? 'text-md py-4' : ''
				}   custom-stripe  px-3 flex justify-between text-left items-center bg-dashboardBlue  font-semibold text-white`}
			>
				<span className="w-[40%]">Company</span>
				<span className="w-[30%] text-center">Price ($)</span>
				<span className="w-[30%] text-right">Change %</span>
			</div>

			<div className="">
				{requiredData?.map((item, i) => (
					<div
						key={i}
						className={`${
							size === 'small' ? 'text-xs py-3' : size === 'medium' ? 'text-sm py-4' : size === 'large' ? 'text-md py-5' : ''
						}  px-3 flex justify-between items-center font-medium text-darkGrey `}
					>
						<span className="w-[40%]"> {item.shortName} </span>
						<span className="w-[30%] text-center ">{item.price}</span>

						<div className={`w-[30%] text-center  `}>
							<span className={`${isGainer ? 'bg-primaryGreen' : 'bg-red-400'}  py-2 px-4 text-center rounded-lg text-white font-normal`}>
								{Math.round(item.change)} %
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default GainerLoser;
