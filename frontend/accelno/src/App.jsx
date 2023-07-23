import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecentActivities from './components/dashboard/RecentActivities/RecentActivities';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RecentActivities />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
