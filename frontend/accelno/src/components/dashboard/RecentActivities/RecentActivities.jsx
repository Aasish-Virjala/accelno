const RecentActivities = () => {
	const recentActivities = [
		'Sent an email to John.',
		'Made a phone call to Jane.',
		'Scheduled a meeting for tomorrow.',
		// Add more activities as needed
	];

	return (
		<div className="flex items-start max-w-md mx-auto mt-10 space-x-4">
			<div className="w-2 bg-red-600 h-full my-2"></div>
			<div className="flex flex-col">
				{recentActivities.map((activity, index) => (
					<div key={index} className="mb-2">
						{activity}
					</div>
				))}
			</div>
		</div>
	);
};

export default RecentActivities;
