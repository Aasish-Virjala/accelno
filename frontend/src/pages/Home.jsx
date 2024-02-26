import HeroHeader from '../components/Header/HeroHeader';
import adidasLogo from '../assets/logos/adidas-logo.svg';
import motogpLogo from '../assets/logos/motogp-logo.svg';
import amazonLogo from '../assets/logos/amazon-logo.svg';
import robinhoodLogo from '../assets/logos/robinhood-logo.svg';
import Pricing from '../components/common/Pricing';
import excelPreview from '../assets/backgrounds/excel-preview.png';
import { Link } from 'react-router-dom';
import caliUniLogo from '../assets/logos/cal-logo.png';
import harvardUniLogo from '../assets/logos/harvard-logo.png';
import mitUniLogo from '../assets/logos/mit-logo.png';
import nyuUniLogo from '../assets/logos/nyu-logo.png';
import bentleyUniLogo from '../assets/logos/bentley-logo.png';
import Testimonials from '../components/common/Testimonial/Testimonials';
import twitterLogo from '../assets/logos/twitter-logo.png';

const clientLogo = [
	{
		id: 1,
		img: amazonLogo,
	},
	{
		id: 2,
		img: motogpLogo,
	},
	{
		id: 3,
		img: robinhoodLogo,
	},
	{
		id: 4,
		img: adidasLogo,
	},
];

const universities = [
	{
		id: 1,
		img: caliUniLogo,
	},
	{
		id: 2,
		img: harvardUniLogo,
	},
	{
		id: 3,
		img: mitUniLogo,
	},
	{
		id: 4,
		img: nyuUniLogo,
	},
	{
		id: 5,
		img: bentleyUniLogo,
	},
];

const Home = () => {
	return (
		<>
			<HeroHeader />;
			<div className="mt-56 md:mt-20 h-full flex flex-col gap-20 justify-center items-center ">
				<div className="flex gap-2 text-center font-semibold text-5xl">
					<span className="text-white">Used</span>
					<span className="gradient-text">By</span>
				</div>
				<div className="flex flex-col md:flex-row items-center justify-center gap-36">
					{clientLogo.map((logo) => (
						<img key={logo.id} loading="lazy" src={logo.img} alt="logo" className=" " />
					))}
				</div>
			</div>
			<div className="flex flex-col md:flex-row justify-center items-center gap-20 w-full h-full p-16 mt-24">
				<div className="flex flex-col gap-4 md:w-[400px] h-full">
					<h2 className="text-5xl gradient-text font-semibold">About Us</h2>
					<p className="text-lg font-medium text-white">
						Our goal is simple - to make finance faster. We are building a platform that speeds up financial modeling & analysis, starting
						with our DCF tool. Get started below, or see what the future of financial analysis looks like first.
					</p>
					<Link to="/roadmap">
						<button className="text-base font-medium bg-[#813CF0] text-white w-60 py-3 rounded-2xl mt-6 blurred-gradient">Roadmap</button>
					</Link>
				</div>
				<div className="h-[300px] w-[300px] md:w-[600px] md:h-[500px] relative rotate-12 flex justify-center items-center">
					<div className="blurred-gradient w-40 h-40 md:h-80 md:w-80"></div>
					<img
						loading="lazy"
						src={excelPreview}
						alt=""
						className=" absolute w-[300px] md:w-[500px] z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl pointer-events-none"
					/>
				</div>
			</div>
			<div className=" font-semibold text-5xl w-full text-center space-x-3 ">
				<span className="text-white">Free For</span>
				<span className="gradient-text">Students</span>
				<p className="text-[#8E8E8E] text-sm font-normal mt-4"> and everyone for now</p>
			</div>
			<Pricing />
			<div className=" py-20 flex flex-col md:flex-row justify-center items-center gap-20">
				{universities.map((uni) => (
					<img key={uni.id} loading="lazy" src={uni.img} alt="university logo" className="w-28 h-28 object-contain pointer-events-none" />
				))}
			</div>
			<div className=" font-semibold text-5xl w-full text-center space-x-3 mt-20 mb-16">
				<span className="text-white">Everyone Loves</span>
				<span className="gradient-text">Saving Time</span>
				<p className="text-[#8E8E8E] text-sm font-normal mt-4">What People Have To Say About Us</p>
			</div>
			<Testimonials />
			<footer className="relative  flex flex-col w-full p-8 z-20 gradient-dark-overlay ">
				<div className="flex flex-col gap-8 mb-4 md:mb-0 md:gap-0 md:flex-row justify-between items-center w-full max-w-[1800px]  mx-auto">
					<h1 className="gradient-text text-3xl font-medium w-full md:w-1/3">Accelno</h1>
					<div className="flex flex-col md:flex-row justify-start md:justify-center gap-3 text-[#F0F0F0] text-sm font-normal w-full md:w-1/3 ">
						<Link to="/contact-us">Contact Us</Link>
						<Link to="/roadmap">Roadmap</Link>{' '}
					</div>
					<div className="w-full md:w-1/3  flex justify-start md:justify-end ">
						<img loading="lazy" src={twitterLogo} alt="twitter logo" className="h-5" />
					</div>
				</div>
				<div className="text-[#888888] text-xs font-medium border-t border-[#424242] py-4 w-full max-w-[1800px] mx-auto flex flex-col gap-4 md:gap-0 md:flex-row  md:justify-between">
					<p className="">Copyright Accelno 2023</p>
					<div className="flex flex-col md:flex-row gap-3">
						<span>Privacy Policy</span>
						<span>Terms of Service</span>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Home;
