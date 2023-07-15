import HeroHeader from '../components/Header/HeroHeader';
import adidasLogo from '../assets/logos/adidas.svg';
import motogpLogo from '../assets/logos/motogp.svg';
import amazonLogo from '../assets/logos/amazon.svg';
import robinhoodLogo from '../assets/logos/robinhood.svg';
import Button from '../components/common/Button';

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
			<div className="flex flex-col md:flex-row justify-center items-center md:space-x-7 lg:space-x-14">
				<h4 className="text-3xl font-medium font-poppins text-darkGrey">
					THEY <br />
					TRUST US
				</h4>
				{clientLogo.map((logo) => (
					<div key={logo.id} className="h-16 w-56  flex justify-center items-center shadow-2xl">
						<img src={logo.img} alt="logo" className="w-28 h-20 " />
					</div>
				))}
			</div>
			<div className="md:my-16 flex flex-col md:flex-row md:justify-center md:items-center md:space-x-8">
				<div className="space-y-4 md:max-w-xl md:py-20 md:px-24 shadow-2xl">
					<h5 className="font-medium text-2xl">About Us</h5>
					<p className="text-darkGrey">
						{' '}
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, a? Repellendus fuga vel, ut harum aut vero saepe? Omnis eum
						distinctio enim, non quae ducimus exercitationem provident blanditiis sed amet?
					</p>
					<Button textColor={'white'} title={'Get Started'} customClassName="gradient-button-bg" />
				</div>
				<div className=" md:max-w-lg md:px-16 space-y-10">
					<div className="gradient-about-bg text-7xl text-white py-12 text-center font-poppins font-normal">Accelno</div>
					<p className="text-sm font-medium text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa a vitae ea illo</p>
				</div>
			</div>
		</>
	);
};

export default Home;
