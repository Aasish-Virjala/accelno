import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AvgMonthlyRevenue from './components/dashboard/AvgMonthlyRevenue/AvgMonthlyRevenue';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AvgMonthlyRevenue />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
