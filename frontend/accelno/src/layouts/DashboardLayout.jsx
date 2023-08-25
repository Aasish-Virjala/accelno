import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../components/dashboard/navbar/DashboardNavbar';
import Sidebar from '../components/dashboard/sidebar/Sidebar';

const DashboardLayout = () => {
	return (
		<>
			<DashboardNavbar />
			<main>
				<Sidebar />
				<Outlet />
			</main>
		</>
	);
};

export default DashboardLayout;
