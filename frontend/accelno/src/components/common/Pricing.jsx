import { MdDone } from 'react-icons/md';

// eslint-disable-next-line react/prop-types
const Pricing = ({ title, price }) => {
	return (
		<div className="w-80 md:w-96 space-y-8 pt-4 px-6 pb-32 font-poppins shadow-lg bg-white ">
			<div className="space-y-4 text-center flex flex-col">
				<h1 className="text-lg font-semibold"> {title} </h1>

				<span className="font-semibold text-2xl">
					$<span className="text-4xl">{price}</span>
					<span className="text-sm"> month</span>{' '}
				</span>
				<button className="text-xl font-semibold text-primaryBlue border border-primaryPurple w-40 py-3 rounded-md mx-auto">
					{' '}
					Get Started{' '}
				</button>
			</div>
			<div className="space-y-4 flex flex-col text-base font-semibold justify-center">
				<span className="space-x-2 flex">
					<span className="text-secondaryPurple text-2xl font-bold">
						<MdDone />
					</span>{' '}
					<span>Custom custom </span>
				</span>
				<span className="space-x-2 flex">
					<span className="text-secondaryPurple text-2xl font-bold">
						<MdDone />
					</span>{' '}
					<span>Custom custom </span>
				</span>
				<span className="space-x-2 flex">
					<span className="text-secondaryPurple text-2xl font-bold">
						<MdDone />
					</span>{' '}
					<span>Custom custom </span>
				</span>
				<span className="space-x-2 flex">
					<span className="text-secondaryPurple text-2xl font-bold">
						<MdDone />
					</span>{' '}
					<span>Custom custom </span>
				</span>
				<span className="space-x-2 flex">
					<span className="text-secondaryPurple text-2xl font-bold">
						<MdDone />
					</span>{' '}
					<span>Custom custom </span>
				</span>
				<span className="space-x-2 flex">
					<span className="text-secondaryPurple text-2xl font-bold">
						<MdDone />
					</span>{' '}
					<span>Custom custom </span>
				</span>
				<span className="space-x-2 flex">
					<span className="text-secondaryPurple text-2xl font-bold">
						<MdDone />
					</span>{' '}
					<span>Custom custom </span>
				</span>
			</div>
		</div>
	);
};

export default Pricing;
