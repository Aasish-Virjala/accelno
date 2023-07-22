import Switch from 'react-switch';
import Pricing from '../components/common/Pricing';

const handleChange = () => {
	console.log('changed');
};

const PricingPlan = () => {
	return (
		<div className="">
			<div className="font-poppins text-base text-white font-medium bg-secondaryBlue py-28 px-4 flex flex-row items-center justify-center space-x-3 ">
				<span>Monthly</span>
				<Switch
					onChange={handleChange}
					checked={true}
					onColor="#86d3ff"
					onHandleColor="#2693e6"
					handleDiameter={30}
					uncheckedIcon={false}
					checkedIcon={false}
					boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
					activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
					height={20}
					width={48}
				/>
				<span>Yearly</span>
			</div>
			<div className=" bg-lightGrey py-10 px-6 flex md:flex-row flex-col justify-center items-center md:space-x-7 md:space-y-0 space-y-4">
				<Pricing title="Basic" price="50" />
				<Pricing title="Standard" price="79" />
				<Pricing title="Professional" price="99" />
			</div>
		</div>
	);
};

export default PricingPlan;
