/* eslint-disable react-refresh/only-export-components */
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
//import Home from './pages/Home';
import DashboardLayout from './layouts/DashboardLayout';
/* import Register from './pages/Register';
import DashboardHome from './screens/DashboardHome';
import Watchlist from './screens/Watchlist';
import TodaysMovers from './screens/TodaysMovers';
import MarketDashboard from './screens/MarketDashboard';
import Checkout from './screens/Checkout';
import PricingPlan from './pages/PricingPlan';
import Settings from './screens/Settings'; */
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Portfolio from './screens/Portfolio';
// import ForgotPassword from './pages/ForgotPassword';
// import ConfirmEmail from './pages/ConfirmEmail';
// import ContactUs from './pages/ContactUs';
import { Suspense, lazy } from 'react';
import FallbackSpinner from './components/common/FallbackSpinner';
import ResetPassword from './pages/ResetPassword';
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const DashboardHome = lazy(() => import('./screens/DashboardHome'));
const Watchlist = lazy(() => import('./screens/Watchlist'));
const TodaysMovers = lazy(() => import('./screens/TodaysMovers'));
const MarketDashboard = lazy(() => import('./screens/MarketDashboard'));
const Checkout = lazy(() => import('./screens/Checkout'));
const PricingPlan = lazy(() => import('./pages/PricingPlan'));
const Settings = lazy(() => import('./screens/Settings'));
const Portfolio = lazy(() => import('./screens/Portfolio'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ConfirmEmail = lazy(() => import('./pages/ConfirmEmail'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const VerifyEmail = lazy(() => import('./pages/VerifyEmail'));

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
	const { user } = useSelector((state) => state.auth);
	return user ? children : <Navigate to="/login" replace />;
};

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			{' '}
			<Route path="/" element={<RootLayout />}>
				<Route path="/" element={<Home />} />
			</Route>
			<Route
				path="/login"
				element={
					<Suspense fallback={<FallbackSpinner />}>
						<Login />
					</Suspense>
				}
			/>
			<Route
				path="/register"
				element={
					<Suspense fallback={<FallbackSpinner />}>
						<Register />
					</Suspense>
				}
			/>
			<Route
				path="/forgot-password"
				element={
					<Suspense fallback={<FallbackSpinner />}>
						<ForgotPassword />
					</Suspense>
				}
			/>
			<Route
				path="/reset-password"
				element={
					<Suspense fallback={<FallbackSpinner />}>
						<ResetPassword />
					</Suspense>
				}
			/>
			<Route
				path="/confirm-email"
				element={
					<Suspense fallback={<FallbackSpinner />}>
						<ConfirmEmail />
					</Suspense>
				}
			/>
			<Route
				path="/verify-email"
				element={
					<Suspense fallback={<FallbackSpinner />}>
						<VerifyEmail />
					</Suspense>
				}
			/>
			<Route
				path="/contact-us/enterprise"
				element={
					<Suspense fallback={<FallbackSpinner />}>
						<ContactUs />
					</Suspense>
				}
			/>
			<Route
				path="/contact-us"
				element={
					<Suspense fallback={<FallbackSpinner />}>
						<ContactUs />
					</Suspense>
				}
			/>
			<Route
				path="/plans"
				element={
					<Suspense fallback={<FallbackSpinner />}>
						<PricingPlan />
					</Suspense>
				}
			/>
			<Route
				path="/checkout"
				element={
					<Suspense fallback={<FallbackSpinner />}>
						<Checkout />
					</Suspense>
				}
			/>
			<Route
				path="/"
				element={
					<PrivateRoute>
						<DashboardLayout />
					</PrivateRoute>
				}
			>
				<Route
					path="/dashboard"
					element={
						<Suspense fallback={<FallbackSpinner />}>
							<DashboardHome />
						</Suspense>
					}
				/>
				<Route
					path="portfolio"
					element={
						<Suspense fallback={<FallbackSpinner />}>
							<Portfolio />
						</Suspense>
					}
				/>
				<Route
					path="/watchlist"
					element={
						<Suspense fallback={<FallbackSpinner />}>
							<Watchlist />
						</Suspense>
					}
				/>
				<Route
					path="/todays-movers"
					element={
						<Suspense fallback={<FallbackSpinner />}>
							<TodaysMovers />
						</Suspense>
					}
				/>
				<Route
					path="/market"
					element={
						<Suspense fallback={<FallbackSpinner />}>
							<MarketDashboard />
						</Suspense>
					}
				/>
				<Route
					path="/settings"
					element={
						<Suspense fallback={<FallbackSpinner />}>
							<Settings />
						</Suspense>
					}
				/>
				<Route
					path="/settings/:element"
					element={
						<Suspense fallback={<FallbackSpinner />}>
							<Settings />
						</Suspense>
					}
				/>
			</Route>
		</>
	)
);

export default router;
