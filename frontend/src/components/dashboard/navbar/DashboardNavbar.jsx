import { useState } from 'react';
import { openStockModal } from '../../../redux/slices/stockDetailModalSlice';
import { useDispatch } from 'react-redux';
import searchIcon from '../../../assets/icons/search-icon.png';
import dropdownIcon from '../../../assets/icons/dropdown-icon.png';
import userAvatar from '../../../assets/icons/user-avatar.png';
import { useGetUserProfileQuery } from '../../../api/endpoints/settingsApi';

const dashboardLinks = [
	{
		id: 1,
		title: 'Valuation',
		path: '/valuation',
	},
	{
		id: 2,
		title: 'News',
		path: '/news',
	},
	{
		id: 3,
		title: '10K',
		path: '/10k',
	},
	{
		id: 4,
		title: 'Equity Report',
		path: '/equity-report',
	},
	{
		id: 5,
		title: 'Charts',
		path: '/charts',
	},
];

const DashboardNavbar = () => {
	const { data } = useGetUserProfileQuery();
	console.log(data);
	const [input, setInput] = useState('');
	const dispatch = useDispatch();
	const handleSearch = () => {
		dispatch(openStockModal({ stock: input }));
	};

	return (
		<div className=" w-full h-[80px] bg-[#121416]   text-[#667177]">
			<div className="flex justify-between items-center max-w-[1750px] xl:mx-auto h-full px-6 ">
				<div className="pl-16">
					<ul className="flex items-center justify-center gap-4">
						{dashboardLinks.map((link) => {
							return (
								<li
									key={link.id}
									className="flex justify-center items-center font-semibold text-sm bg-[#1D2022] rounded-full px-7 py-2 hover:border hover:border-[#40FED1] cursor-pointer"
								>
									<span>{link.title}</span>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="flex gap-3 ">
					<div className="relative w-96 h-full">
						<img
							src={searchIcon}
							onClick={handleSearch}
							onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
							alt="search icon"
							className="w-4 absolute left-4 top-1/2 -translate-y-1/2"
						/>
						<input
							type="text"
							placeholder="Search anything here"
							className="py-3 px-14 w-full  placeholder:text-inherit placeholder:font-medium bg-[#1D2022] rounded-full"
							onChange={(e) => setInput(e.target.value)}
						/>
						<img src={dropdownIcon} alt="dropdown icon" className="w-5 absolute right-4 top-1/2 -translate-y-1/2" />
					</div>
					<div className="bg-[#1D2022] px-3 h-full py-1 rounded-full flex items-center gap-2">
						<h2 className="text-sm font-semibold">{data?.userProfile.fullName}</h2>
						<img src={userAvatar} alt="User Avatar" className="w-9" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardNavbar;
