import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardHome from './screens/DashboardHome';
import SingleStockStackedChart from './components/dashboard/SingleStockStackedChart/SingleStockStackedChart';
import TodaysMovers from './screens/TodaysMovers';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TodaysMovers />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
