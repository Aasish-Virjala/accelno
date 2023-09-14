import { MdInfoOutline } from 'react-icons/md';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWidget } from '../../../redux/slices/widgetSlice';
import { useGetFinancialsQuery } from '../../../api/endpoints/widgetDataApi';

const FinancialTableFull = ({ widgetId, screen }) => {
	const { data: financialData } = useGetFinancialsQuery(['AAPL', 'TSLA', 'AMZN']);
	const [edit, setEdit] = useState(false);
	const dispatch = useDispatch();
	console.log(financialData);
	const handleWidgetDelete = (widgetId) => {
		dispatch(deleteWidget({ screen, widgetId }));
	};

	return (
		<div className="w-[450px] bg-white  py-2 font-inter rounded-xl border border-lightSilver shadow-xl">
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

			<div className={` 'text-sm'  text-center flex justify-between items-center py-3 px-4 text-darkGrey font-bold `}>
				<span className="w-1/5">COMPANY</span>
				<span className="w-1/5">PRICE($)</span>
				<span className="w-1/5">MCAP($M)</span>
				<span className="w-1/5">P/B</span>
				<span className="w-1/5">P/E</span>
			</div>

			{financialData?.map((item, index) => (
				<div key={index} className={` text-sm py-3 text-center px-4 flex justify-between items-center font-medium text-darkGrey`}>
					<span className="w-1/5">{item.shortName}</span>
					<span className="w-1/5">{Math.round(item.price)}</span>
					<span className="w-1/5">{item.marketCap}</span>
					<span className="w-1/5">{Math.round(item.pbRatio)}</span>
					<span className="w-1/5">{Math.round(item.peRatio)}</span>
				</div>
			))}
		</div>
	);
};

export default FinancialTableFull;
