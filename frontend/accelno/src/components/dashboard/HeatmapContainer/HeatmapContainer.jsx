import { MdKeyboardArrowDown } from 'react-icons/md';
import HeatmapComp from '../charts/heatmap/Heatmap';

const HeatmapContainer = ({ size }) => {
	return (
		<div
			className={`${
				size === 'small' ? ' w-[320px] h-[380px]' : size === 'medium' ? ' w-[410px] h-[410px]' : ' w-[480px] h-[410px] '
			} bg-white font-poppins rounded-xl border border-lightSilver shadow-xl  py-2`}
		>
			<div className="flex justify-between items-center p-4 text-darkGrey">
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
