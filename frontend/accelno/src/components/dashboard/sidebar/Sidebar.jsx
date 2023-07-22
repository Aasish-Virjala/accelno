import dashboardLogo from '../../../assets/dashboard/logos/dashboardLogo.svg';
import { NavLink } from 'react-router-dom';
import homeIcon from '../../../assets/dashboard/icons/homeIcon.svg';
import widgetIcon from '../../../assets/dashboard/icons/widgetIcon.svg';
import uiElementsIcon from '../../../assets/dashboard/icons/uiElementsIcon.svg';
import advancedUiIcon from '../../../assets/dashboard/icons/advancedUiIcon.svg';
import formElementsIcon from '../../../assets/dashboard/icons/formElementsIcon.svg';
import calendarIcon from '../../../assets/dashboard/icons/calendarIcon.svg';
import chartsIcon from '../../../assets/dashboard/icons/chartsIcon.svg';
import { MdKeyboardArrowDown } from 'react-icons/md';

const sidebarItems = [
	{
		id: 1,
		title: 'Dashboard',
		icon: homeIcon,
		path: '#',
	},
	{
		id: 2,
		title: 'Widgets',
		icon: widgetIcon,
		path: '#',
	},
	{
		id: 3,
		title: 'UI Elements',
		icon: uiElementsIcon,
		path: '#',
	},
	{
		id: 4,
		title: 'Advanced UI',
		icon: advancedUiIcon,
		path: '#',
	},
	{
		id: 5,
		title: 'Form Elements',
		icon: formElementsIcon,
		path: '#',
	},
	{
		id: 6,
		title: 'Calendar',
		icon: calendarIcon,
		path: '#',
	},
	{
		id: 7,
		title: 'Charts',
		icon: chartsIcon,
		path: '#',
	},
];

const Sidebar = () => {
	return (
		<div className="bg-secondaryGrey w-64 h-screen py-4 space-y-4">
			<div className="px-16">
				<img src={dashboardLogo} alt="Logo" className=" w-14 " />
			</div>
			<div className="text-red-600">
				{sidebarItems.map((item) => (
					<NavLink
						key={item.id}
						to={item.path}
						className={({ isActive }) => (isActive ? 'bg-secondaryGrey' : '')}
						style={({ isActive }) => {
							return {
								backgroundColor: isActive ? '#393A3E' : '',
								borderTop: isActive ? '2px solid #FF5B5B' : '',
							};
						}}
					>
						<div className="flex items-center py-3 px-6 space-x-4 ">
							<img src={item.icon} alt="" />
							<div className="flex justify-between w-full">
								<span className="font-nunito font-normal text-white"> {item.title} </span>
								<span className={`${item.title !== 'Dashboard' && item.title !== 'Widgets' ? 'block' : 'hidden'} text-white `}>
									{' '}
									{<MdKeyboardArrowDown />}{' '}
								</span>
							</div>
						</div>
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
