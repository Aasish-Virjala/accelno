import Button from '../common/Button';
import HeaderCover from './HeaderCover';

const HeroHeader = () => {
	return (
		<div className="pt-20 custom-header-cover ">
			<div className="text-center mt-28 flex flex-col gap-3 p-4 md:p-0 ">
				<h2 className="text-white font-semibold text-3xl md:text-6xl ">Build Valuation Models Instantly</h2>
				<h3 className="gradient-text  font-semibold text-3xl md:text-6xl "> Live Hours Saved: 293</h3>
				<p className="text-[#8E8E8E] text-base md:text-lg font-medium"> Fast Financial Intelligence starts here </p>
			</div>

			<div className="flex flex-col md:flex-row justify-center gap-4 mt-14 mx-auto w-full text-center">
				<Button customClassName="bg-[#813CF0] text-white" title={'Get Started'} path={'/register'} />
				<Button customClassName="bg-[#373737] text-white" title={'Learn More'} />
			</div>
			<HeaderCover />
		</div>
	);
};

export default HeroHeader;
