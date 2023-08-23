import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PricingPlan from './pages/PricingPlan';
import Register from './pages/Register';
import DashboardHome from './screens/DashboardHome';
import EarningCalendar from './screens/EarningCalendar';
import TodaysMovers from './screens/TodaysMovers';
import MarketDashboard from './screens/MarketDashboard';
import Watchlist from './screens/Watchlist';
import EtfBundles from './screens/EtfBundles';
import AiAssistant from './screens/AiAssistant';
import FileUploader from './components/dashboard/AiAssistant/FileUploader';
import StripeUpdateTest from './services/StripeUpdateTest';
import StripeSubscription from './services/StripeSubscription';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/pricing" element={<PricingPlan />} />
				<Route path="/dashboard" element={<DashboardHome />} />
				<Route path="/dashboard/earning-calendar" element={<EarningCalendar />} />
				<Route path="/dashboard/todays-movers" element={<TodaysMovers />} />
				<Route path="/dashboard/market-dashboard" element={<MarketDashboard />} />
				<Route path="/dashboard/etf-bundles" element={<EtfBundles />} />
				<Route path="/dashboard/watchlist" element={<Watchlist />} />
				<Route path="/dashboard/ai-assistant" element={<AiAssistant />} />
				<Route path="/fileuploader" element={<FileUploader />} />
				<Route path="/createpayment" element={<StripeSubscription />} />
				<Route path="/updatepayment" element={<StripeUpdateTest />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
