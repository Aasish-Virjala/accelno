import addIcon from '../../../assets/dashboard/icons/addIcon.svg';

const Welcome = () => {
	return (
		<div className="welcome-container my-20 mx-auto py-36 px-4 border border-lightSilver rounded-xl flex flex-col justify-center items-center space-y-12 ">
			<div className=" font-inter text-3xl ">
				<span className="text-darkGrey font"> Hi, </span> <span className="font-bold text-primaryGold"> Fynn Schwichtenberg </span>
				<p className="mt-2 text-sm text-primaryGrey"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
			</div>
			<img src={addIcon} alt="Add Icon" className="w-28 cursor-pointer " />
		</div>
	);
};

export default Welcome;
