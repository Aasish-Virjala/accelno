import FormTemplate from '../components/common/FormTemplate';

const inputs = [
	{
		id: 1,
		type: 'text',
		placeholder: 'Username',
	},
	{
		id: 2,
		type: 'email',
		placeholder: 'Email',
	},
	{
		id: 3,
		type: 'password',
		placeholder: 'Password',
	},
	{
		id: 4,
		type: 'password',
		placeholder: 'Retype Password',
	},
];

const Register = () => {
	return <FormTemplate formType="Register" inputs={inputs} />;
};

export default Register;
