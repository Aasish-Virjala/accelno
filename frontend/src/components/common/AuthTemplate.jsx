/* eslint-disable react/prop-types */
import accelnoLogo from '../../assets/logos/accelno-logo.svg';

const AuthTemplate = () => {
	return (
		<div className="min-h-screen w-full auth-container">
			<div className="auth-wrapper px-4 h-full w-full flex flex-col justify-center items-center font-poppins text-white text-lg font-normal">
				<div className="w-4/6 max-w-[550px] space-y-6 ">
					<img src={accelnoLogo} alt="Accelno Logo" width={200} height={200} />
					<p className="text-[#7D7D7D]">
						In the world of numbers, where fortunes rise and fall, Where markets dance to times unyielding call. In ledgers and graphs,
						stories are told, Of ventures bold, and silver and gold.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AuthTemplate;
