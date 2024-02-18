import AuthTemplate from '../components/common/AuthTemplate';
import FormTemplate from '../components/common/FormTemplate';
import { useForgotPasswordMutation } from '../api/endpoints/authApi';
import { useState } from 'react';

const inputs = [
	{
		id: 1,
		type: 'text',
		placeholder: 'Email',
		value: 'email',
		label: 'Enter your email with which you registered',
	},
];

const ForgotPassword = () => {
	const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState(false);

	function submitHandler(data) {
		forgotPassword(data).then((response) => {
			if (!response.ok) {
				setErrorMessage(response.error.data.message);
			} else {
				setSuccessMessage(true);
			}
		});
	}

	return (
		<div className="flex">
			<AuthTemplate title="Forgot your Password" />
			<FormTemplate
				formType="ForgotPassword"
				inputs={inputs}
				submitHandler={submitHandler}
				isLoading={isLoading}
				errorMessage={errorMessage}
				successMessage={successMessage}
			/>
		</div>
	);
};

export default ForgotPassword;
