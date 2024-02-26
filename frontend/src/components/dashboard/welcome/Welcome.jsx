import { useGetUserProfileQuery } from '../../../api/endpoints/settingsApi';
import addIcon from '../../../assets/dashboard/icons/addIcon.svg';
import { openModal } from '../../../redux/slices/modalSlice';
import { useDispatch } from 'react-redux';

const Welcome = () => {
	const { data } = useGetUserProfileQuery();

	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(openModal());
	};

	return (
		<div className="w-full min-h-screen bg-[#121416] py-20">
			<div
				className="bg-[#1D2022] shadow-2xl
				    w-[600px] h-[400px] mx-auto py-36 px-4  rounded-xl flex flex-col justify-center items-center space-y-12"
			>
				<div className="  text-3xl font-semibold ">
					<span className={`text-white  `}> Hi, </span> <span className="gradient-text"> {data?.userProfile.fullName} </span>
				</div>
				<img src={addIcon} alt="Add Icon" className="w-28 cursor-pointer " onClick={handleClick} />
			</div>
		</div>
	);
};

export default Welcome;
