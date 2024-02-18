import githubIcon from '../../assets/social/github-icon.png';
import redditIcon from '../../assets/social/reddit-icon.png';
import twitterIcon from '../../assets/social/twitter-icon.png';
import discordIcon from '../../assets/social/discord-icon.png';
import { MdDehaze } from 'react-icons/md';
import accelnoLogo from '../../assets/logos/accelno-logo.svg';
import { Link } from 'react-router-dom';

const menuLinks = [
	{
		id: 1,
		text: 'Services',
		path: '/services',
	},
	{
		id: 2,
		text: 'Solutions',
		path: '/solutions',
	},
	{
		id: 3,
		text: 'Roadmap',
		path: '/roadmap',
	},
	{
		id: 4,
		text: 'Whitepaper',
		path: '/whitepaper',
	},
];

const socialLinks = [
	{
		id: 1,
		img: githubIcon,
	},

	{
		id: 2,
		img: discordIcon,
	},
	{
		id: 3,
		img: redditIcon,
	},
	{
		id: 4,
		img: twitterIcon,
	},
];

const Navbar = () => {
	return (
		<div className="absolute top-0 right-0 left-0 font-poppins py-8 px-10 flex justify-between items-center">
			<h1 className="gradient-text text-5xl font-medium">Accelno</h1>
			<Link to="/login">
				<button className="py-3 px-12 text-white font-medium text-lg gradient-border rounded-2xl">Log In</button>
			</Link>
		</div>
	);
};

export default Navbar;

/*

<div className="flex justify-center px-3 md:hidden text-3xl text-white">
					<span>
						{' '}
						<MdDehaze />
					</span>
				</div>

				<div className="hidden md:flex  space-x-6">
					{menuLinks.map((item) => (
						<span key={item.id} className=" text-lg font-normal text-white">
							{item.text}
						</span>
					))}
				</div>
				<div className="hidden space-x-4 md:flex">
					{socialLinks.map((item) => (
						<img key={item.id} src={item.img} alt="social" className="h-5" />
					))}
				</div>


*/
