import { NavLink } from 'react-router-dom';
import { MdSearch, MdNotificationsNone, MdPerson, MdKeyboardArrowDown } from 'react-icons/md';

const dashboardLinks = [
	{
		id: 1,
		title: 'Portfolio',
		path: '#',
	},
	{
		id: 2,
		title: 'Watchlist',
		path: '#',
	},
	{
		id: 3,
		title: 'Market',
		path: '#',
	},
	{
		id: 4,
		title: 'Todays Movers',
		path: '#',
	},
];

const DashboardNavbar = () => {
	return (
		<div className="bg-dashboardGrey py-3  pl-64 pr-10 ">
			<div className="flex justify-between max-w-7xl">
				<div className="font-inter font-normal text-sm text-white flex justify-center items-center space-x-14">
					{dashboardLinks.map((link) => (
						<NavLink key={link.id} to={link.path} className={({ isActive, isPending }) => (isPending ? '' : isActive ? '' : '')}>
							{link.title}
						</NavLink>
					))}
				</div>
				<div className="relative w-96">
					<input
						type="text"
						className="bg-searchbarGrey py-3 px-4 w-96 rounded font-inter text-sm text-lightSilver"
						placeholder="Search for a company"
					/>
					<MdSearch className="text-white text-2xl font-bold absolute right-2 top-3 bottom-0" />
				</div>

				<div className="flex justify-center items-center text-white space-x-3">
					<MdNotificationsNone className="text-2xl " />
					<div className=" rounded-full border-2 border-white w-10 h-10 flex justify-center items-center  text-3xl">
						{' '}
						<MdPerson className="" />{' '}
					</div>
					<MdKeyboardArrowDown className="text-2xl" />
				</div>
			</div>
		</div>
	);
};

export default DashboardNavbar;
