/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const FormTemplate = ({ formType, inputs }) => {
	return (
		<div className="h-full w-full">
			<div className=" mx-auto my-36 bg-lightGrey pt-14 pb-3 px-8 md:max-w-md max-w-xs space-y-2 font-poppins">
				<div className="space-y-10 flex flex-col">
					{inputs.map((el) => (
						<input key={el.id} type={el.type} className="px-6 py-3 text-darkGrey text-sm" placeholder={el.placeholder} />
					))}

					<button className="bg-darkNavy text-white  py-3 text-md font-semibold "> {formType === 'Login' ? 'Login' : 'Register'} </button>
				</div>
				<p className="text-center text-xs font-normal">
					{formType === 'Login' ? 'Dont have an account? Register here' : 'Already have an account? Login here'}
				</p>
			</div>
		</div>
	);
};

export default FormTemplate;
