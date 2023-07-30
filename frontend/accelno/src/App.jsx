import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardHome from './screens/DashboardHome';
import SingleStockStackedChart from './components/dashboard/SingleStockStackedChart/SingleStockStackedChart';
import TodaysMovers from './screens/TodaysMovers';
import Watchlist from './screens/Watchlist';
import EarningCalendar from './screens/EarningCalendar';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<EarningCalendar />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
