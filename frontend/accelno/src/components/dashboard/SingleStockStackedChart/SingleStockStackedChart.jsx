/* eslint-disable react/prop-types */
import StackedAreachart from '../charts/areachart/StackedAreachart';

const SingleStockStackedChart = ({ size }) => {
	return (
		<div
			className={`${
				size === 'small' ? '300px' : size === 'medium' ? '380px' : '460px'
			} bg-white rounded-xl border border-lightSilver   pt-3 pb-5 shadow-md`}
		>
			<div className="flex justify-center space-x-5 mb-4">
				<div className="flex space-x-1 font-bold text-sm">
					<span className="text-darkGrey">AAPL</span>
					<span className="text-secondarySilver">Apple Inc.</span>
					<span className="text-primaryGreen">(+1.27%)</span>
				</div>

				<span className="text-sm text-darkGrey font-medium">NASDAQ - USD</span>
			</div>
			<StackedAreachart size={size} />
		</div>
	);
};

export default SingleStockStackedChart;
