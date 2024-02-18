import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Button = ({ title, customClassName, path }) => {
	return (
		<Link to={path}>
			<button className={` ${customClassName} font-normal text-base py-3 px-14  rounded-lg`}>{title}</button>
		</Link>
	);
};

export default Button;
