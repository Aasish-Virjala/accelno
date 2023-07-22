import { MdArrowDropUp } from 'react-icons/md';
import Areachart from '../charts/areachart/Areachart';
import Switch from 'react-switch';

const handleChange = () => {
	console.log('changed');
};

const SingleStockChart = () => {
	return (
		<div className="space-y-3 p-3 single-stock-container font-inter rounded-xl border border-lightSilver  m-5">
			<div className="flex justify-between">
				<div className="flex space-x-1 font-bold text-sm">
					<span className="text-darkGrey">AAPL</span>
					<span className="text-secondarySilver">Apple Inc.</span>
				</div>
				<div className="space-x-1 font-bold text-sm">
					<span className="text-darkGrey">100.00</span>
					<span className="text-secondarySilver">USD</span>
				</div>
			</div>

			<div className="flex justify-between font-semibold">
				<span className="text-secondarySilver text-xs items-center">Updated:10:36am</span>
				<div className="flex justify-center ">
					<span className="text-xs">+50.00</span>
					<span className="text-primaryGreen text-xs">(+1.27%)</span>
					<span className="text-xl">
						<MdArrowDropUp className="text-primaryGreen" />
					</span>
				</div>
			</div>
			<Areachart />
			<div className="flex justify-between">
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
					<span className="text-xs font-medium text-secondarySilver">Notifications</span>
				</div>
				<span className="text-xs font-semibold text-secondarySilver">Advance Chart</span>
			</div>
		</div>
	);
};

export default SingleStockChart;
