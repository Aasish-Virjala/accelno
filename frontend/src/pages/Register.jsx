import FormTemplate from '../components/common/FormTemplate';
import { useRegisterMutation } from '../api/endpoints/authApi';
import { useNavigate } from 'react-router-dom';
import AuthTemplate from '../components/common/AuthTemplate';
import { useState } from 'react';

const inputs = [
	{
		id: 1,
		type: 'text',
		placeholder: 'Enter Full Name',
		value: 'fullName',
		label: 'Full Name',
	},
	{
		id: 2,
		type: 'text',
		placeholder: 'Choose a username',
		value: 'username',
		label: 'Username',
	},
	{
		id: 3,
		type: 'email',
		placeholder: 'Email',
		value: 'email',
		label: 'Email',
	},
	{
		id: 4,
		type: 'password',
		placeholder: 'Password',
		value: 'password',
		label: 'Password',
	},
	{
		id: 5,
		type: 'password',
		placeholder: 'Retype Password',
		value: 'retypePassword',
		label: 'Retype Password',
	},
];

const Register = () => {
	const [register, { isLoading, isSuccess }] = useRegisterMutation();
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState('');

	const submitHandler = async (data) => {
		// eslint-disable-next-line no-unused-vars
		try {
			setErrorMessage('');

			// eslint-disable-next-line no-unused-vars
			const { retypePassword, ...rest } = data;

			await register(rest).unwrap();

			setTimeout(() => {
				navigate('/confirm-email');
			}, 3000);
		} catch (error) {
			setErrorMessage(error.data.message);
		}
	};
	return (
		<div className="flex min-h-screen">
			<AuthTemplate title="JOIN US" />
			<FormTemplate
				formType="Register"
				inputs={inputs}
				submitHandler={submitHandler}
				successMessage={isSuccess}
				errorMessage={errorMessage}
				isLoading={isLoading}
			/>
		</div>
	);
};

export default Register;
