import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MarketDashboard from './screens/MarketDashboard';
import Bundle from './components/dashboard/bundles/Bundle';
import EtfBundles from './screens/EtfBundles';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<EtfBundles />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
