import HeroHeader from '../components/Header/HeroHeader';
import adidasLogo from '../assets/logos/adidas-logo.svg';
import motogpLogo from '../assets/logos/motogp-logo.svg';
import amazonLogo from '../assets/logos/amazon-logo.svg';
import robinhoodLogo from '../assets/logos/robinhood-logo.svg';
import Button from '../components/common/Button';
import Pricing from '../components/common/Pricing';
import Testimonials from '../components/common/Testimonial/Testimonials';
import investorLogo from '../assets/logos/investorLogo.png';
import excelPreview from '../assets/backgrounds/excel-preview.png';

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
						<img key={logo.id} src={logo.img} alt="logo" className=" " />
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
				</div>
				<div className="h-[300px] w-[300px] md:w-[600px] md:h-[500px] relative rotate-12 ">
					<div className="absolute h-[200px] md:h-[310px] w-[300px] md:w-[450px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 gradient-blurred-bg rounded-md mix-blend-normal filter blur-xl  "></div>
					<img
						src={excelPreview}
						alt=""
						className="absolute w-[300px] md:w-[500px] z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl pointer-events-none"
					/>
				</div>
			</div>
			<div className="flex gap-2 justify-center font-semibold text-5xl w-full ">
				<span className="text-white">Free For</span>
				<span className="gradient-text">Students</span>
			</div>
			<div className=" py-10 px-6 flex md:flex-row flex-col justify-center items-center md:space-x-7 md:space-y-0 space-y-4 ">
				<Pricing title="Basic" price="50" isDumb={true} />
				<Pricing title="Standard" price="79" isDumb={true} />
				<Pricing title="Professional" price="99" isDumb={true} />
			</div>
			<div className=" py-16 space-y-8">
				<h6 className="text-2xl md:text-3xl font-medium font-poppins text-darkGrey text-center"> What Our Members Say </h6>
				<p className="font-normal text-sm md:text-base text-darkGrey font-poppins text-center px-4 md:px-0 ">
					{' '}
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sequi voluptate. <br /> In eius hic consectetur quaerat magnam
					unde iusto saepe neque molestiae, non eaque
				</p>
				<Testimonials />
			</div>
			<div className=" text-lg md:text-xl font-bold font-poppins py-16 px-6 md:px-20 bg-lightGrey">
				<span className="ml-2 md:ml-4">Accelno is a</span>
				<img src={investorLogo} alt="Morning Investor Logo" className="md:w-72 w-56" />
				<span className="ml-2 md:ml-4">Company</span>
			</div>
		</>
	);
};

export default Home;
