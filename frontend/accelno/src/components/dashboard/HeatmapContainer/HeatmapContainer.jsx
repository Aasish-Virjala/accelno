import { MdKeyboardArrowDown, MdInfoOutline } from 'react-icons/md';
import HeatmapComp from '../charts/heatmap/Heatmap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWidget } from '../../../redux/slices/widgetSlice';

const HeatmapContainer = ({ size, widgetId, screen }) => {
	const [edit, setEdit] = useState(false);
	const dispatch = useDispatch();

	const handleWidgetDelete = (widgetId) => {
		dispatch(deleteWidget({ screen, widgetId }));
	};
	return (
		<div
			className={`${
				size === 'small' ? ' w-[320px] h-[380px]' : size === 'medium' ? ' w-[410px] h-[410px]' : ' w-[480px] h-[410px] '
			} bg-white font-poppins rounded-xl border border-lightSilver shadow-xl  py-2`}
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

			<div className="flex justify-between items-center px-4 text-darkGrey">
				<span className="font-bold text-md ">Heatmap</span>
				<div className="flex items-center space-x-2">
					<span className="text-xs font-medium">Sectors</span>
					<MdKeyboardArrowDown />
				</div>
				<div className="flex items-center space-x-2">
					<span className="text-xs font-medium">7 days</span>
					<MdKeyboardArrowDown />
				</div>
			</div>
			<div className="flex justify-center">
				<HeatmapComp size={size} />
			</div>
		</div>
	);
};

export default HeatmapContainer;
