import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardHome from './screens/DashboardHome';
import Watchlist from './screens/Watchlist';
import TodaysMovers from './screens/TodaysMovers';
import MarketDashboard from './screens/MarketDashboard';
import Checkout from './screens/Checkout';
import PricingPlan from './pages/PricingPlan';
import Settings from './screens/Settings';
import Test from './screens/Test';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<RootLayout />}>
				<Route path="/" element={<Home />} />
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="test" element={<Test />} />
			<Route path="/" element={<DashboardLayout />}>
				<Route path="/dashboard" element={<DashboardHome />} />
				<Route path="/watchlist" element={<Watchlist />} />
				<Route path="/todays-movers" element={<TodaysMovers />} />
				<Route path="/market" element={<MarketDashboard />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/settings/:element" element={<Settings />} />
			</Route>
		</>
	)
);

export default router;
