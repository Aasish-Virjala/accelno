import FormTemplate from '../components/common/FormTemplate';
import { useLoginMutation } from '../api/endpoints/authApi';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/slices/authSlice';
import AuthTemplate from '../components/common/AuthTemplate';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const inputs = [
	{
		id: 1,
		type: 'text',
		placeholder: 'Email or Username',
		value: 'username',
		label: 'Email or Username',
	},
	{
		id: 2,
		type: 'password',
		placeholder: 'Password',
		value: 'password',
		label: 'Password',
	},
];

const Login = () => {
	const [login, { isLoading, isSuccess }] = useLoginMutation();
	const [loginError, setLoginError] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const submitHandler = async (data) => {
		try {
			setLoginError('');
			const response = await login(data).unwrap();
			dispatch(loginSuccess({ ...response }));
			setTimeout(() => {
				response.isActive === true ? navigate('/dashboard') : navigate('/plans');
			}, 2000);
		} catch (error) {
			setLoginError(error.data.message);
		}
	};

	return (
		<div className="flex min-h-screen">
			<AuthTemplate title="WELCOME BACK" />
			<FormTemplate
				formType="Login"
				inputs={inputs}
				submitHandler={submitHandler}
				isLoading={isLoading}
				errorMessage={loginError}
				successMessage={isSuccess}
			/>
		</div>
	);
};

export default Login;
