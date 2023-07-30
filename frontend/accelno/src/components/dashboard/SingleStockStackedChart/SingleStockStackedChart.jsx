/* eslint-disable react/prop-types */
import StackedAreachart from '../charts/areachart/StackedAreachart';

const SingleStockStackedChart = ({ containerWidth, chartWidth }) => {
	return (
		<div
			className={`bg-white md:w-[${containerWidth}px] 2xl:w-[${
				containerWidth + 40
			}px] rounded-xl border border-lightSilver  px-2 pt-3 pb-5 shadow-md`}
		>
			<div className="flex justify-center space-x-5 mb-4">
				<div className="flex space-x-1 font-bold text-sm">
					<span className="text-darkGrey">AAPL</span>
					<span className="text-secondarySilver">Apple Inc.</span>
					<span className="text-primaryGreen">(+1.27%)</span>
				</div>

				<span className="text-sm text-darkGrey font-medium">NASDAQ - USD</span>
			</div>
			<StackedAreachart chartWidth={chartWidth} />
		</div>
	);
};

export default SingleStockStackedChart;
