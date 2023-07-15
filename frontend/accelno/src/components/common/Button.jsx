// eslint-disable-next-line react/prop-types
const Button = ({ title, textColor, customClassName }) => {
	if (!customClassName) {
		return <button className={` text-${textColor} font-normal text-lg py-4 px-6  md:text-xl md:py-5 md:px-8 rounded-lg `}>{title}</button>;
	}
	return (
		<button className={` ${customClassName} text-${textColor} font-normal text-lg py-4 px-6  md:text-xl md:py-5 md:px-8 rounded-lg`}>
			{title}
		</button>
	);
};

export default Button;
