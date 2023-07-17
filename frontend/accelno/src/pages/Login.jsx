import FormTemplate from '../components/common/FormTemplate';

const inputs = [
	{
		id: 1,
		type: 'text',
		placeholder: 'Username',
	},
	{
		id: 2,
		type: 'password',
		placeholder: 'Password',
	},
];

const Login = () => {
	return <FormTemplate formType="Login" inputs={inputs} />;
};

export default Login;
