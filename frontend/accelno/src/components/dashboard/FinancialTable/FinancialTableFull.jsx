import { MdInfoOutline } from 'react-icons/md';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWidget } from '../../../redux/slices/widgetSlice';

const data = [
	{
		id: 1,
		name: 'Tesla Inc.',
		price: 102.32,
		mcap: 300.33,
		pb: 3.2,
		pe: 'Tesla Inc.',
	},
	{
		id: 2,
		name: 'Tesla Inc.',
		price: 102.32,
		mcap: 300.33,
		pb: 3.2,
		pe: 'Tesla Inc.',
	},
	{
		id: 3,
		name: 'Tesla Inc.',
		price: 102.32,
		mcap: 300.33,
		pb: 3.2,
		pe: 'Tesla Inc.',
	},
	{
		id: 4,
		name: 'Tesla Inc.',
		price: 102.32,
		mcap: 300.33,
		pb: 3.2,
		pe: 'Tesla Inc.',
	},
	{
		id: 5,
		name: 'Tesla Inc.',
		price: 102.32,
		mcap: 300.33,
		pb: 3.2,
		pe: 'Tesla Inc.',
	},
	{
		id: 6,
		name: 'Tesla Inc.',
		price: 102.32,
		mcap: 300.33,
		pb: 3.2,
		pe: 'Tesla Inc.',
	},
	{
		id: 7,
		name: 'Tesla Inc.',
		price: 102.32,
		mcap: 300.33,
		pb: 3.2,
		pe: 'Tesla Inc.',
	},
	{
		id: 8,
		name: 'Tesla Inc.',
		price: 102.32,
		mcap: 300.33,
		pb: 3.2,
		pe: 'Tesla Inc.',
	},
	{
		id: 9,
		name: 'Tesla Inc.',
		price: 102.32,
		mcap: 300.33,
		pb: 3.2,
		pe: 'Tesla Inc.',
	},
	{
		id: 10,
		name: 'Tesla Inc.',
		price: 102.32,
		mcap: 300.33,
		pb: 3.2,
		pe: 'Tesla Inc.',
	},
	{
		id: 11,
		name: 'Tesla Inc.',
		price: 102.32,
		mcap: 300.33,
		pb: 3.2,
		pe: 'Tesla Inc.',
	},
	{
		id: 12,
		name: 'Tesla Inc.',
		price: 102.32,
		mcap: 300.33,
		pb: 3.2,
		pe: 'Tesla Inc.',
	},
];

const FinancialTableFull = ({ widgetId, screen }) => {
	const [edit, setEdit] = useState(false);
	const dispatch = useDispatch();

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

			{data.map((item) => (
				<div key={item.id} className={` text-sm py-3 text-center px-4 flex justify-between items-center font-medium text-darkGrey`}>
					<span className="w-1/5">{item.name}</span>
					<span className="w-1/5">{item.price}</span>
					<span className="w-1/5">{item.mcap}</span>
					<span className="w-1/5">{item.pb}</span>
					<span className="w-1/5">{item.pe}</span>
				</div>
			))}
		</div>
	);
};

export default FinancialTableFull;
