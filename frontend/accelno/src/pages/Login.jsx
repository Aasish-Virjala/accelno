import FormTemplate from '../components/common/FormTemplate';
import { useLoginMutation } from '../api/endpoints/authApi';
import show from '../utils/toastNotifications';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/slices/authSlice';

const inputs = [
	{
		id: 1,
		type: 'text',
		placeholder: 'Username',
		value: 'username',
	},
	{
		id: 2,
		type: 'password',
		placeholder: 'Password',
		value: 'password',
	},
];

const Login = () => {
	const [login] = useLoginMutation();
	const dispatch = useDispatch();
	const submitHandler = (data) => {
		login(data)
			.then((response) => {
				console.log(response);
				if (response.data.status === 'success') {
					show('Logged In Successfully', 'success');
					dispatch(loginSuccess({ ...response.data }));
				}
			})
			.catch((err) => {
				show(err.data.message, 'error');
			});
	};

	return <FormTemplate formType="Login" inputs={inputs} submitHandler={submitHandler} />;
};

export default Login;
