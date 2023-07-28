import { MdKeyboardArrowDown } from 'react-icons/md';
import HeatmapComp from '../charts/heatmap/Heatmap';

const HeatmapContainer = () => {
	return (
		<div className="bg-white w-[320px] h-full font-poppins rounded-xl border border-lightSilver shadow-xl  py-2">
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
				<HeatmapComp />
			</div>
		</div>
	);
};

export default HeatmapContainer;
