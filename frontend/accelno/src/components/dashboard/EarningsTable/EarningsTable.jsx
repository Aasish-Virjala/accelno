const data = [
	{
		'TICKER 428 Matches': 'CVS Health Corp',
		'MKT CAP': '89.991 B',
		'EPS ESTIMATE': 2.89,
		'REPORTED EPS': 2.98,
		SURPRISE: 0.08,
		'SURPRISE %': '2.77%',
		'REVENUE FORECAST': '140 B',
	},
	{
		'TICKER 428 Matches': 'CVS Health Corp',
		'MKT CAP': '89.991 B',
		'EPS ESTIMATE': 2.89,
		'REPORTED EPS': 2.98,
		SURPRISE: 0.08,
		'SURPRISE %': '2.77%',
		'REVENUE FORECAST': '140 B',
	},
	{
		'TICKER 428 Matches': 'CVS Health Corp',
		'MKT CAP': '89.991 B',
		'EPS ESTIMATE': 2.89,
		'REPORTED EPS': 2.98,
		SURPRISE: 0.08,
		'SURPRISE %': '2.77%',
		'REVENUE FORECAST': '140 B',
	},
	{
		'TICKER 428 Matches': 'CVS Health Corp',
		'MKT CAP': '89.991 B',
		'EPS ESTIMATE': 2.89,
		'REPORTED EPS': 2.98,
		SURPRISE: 0.08,
		'SURPRISE %': '2.77%',
		'REVENUE FORECAST': '140 B',
	},
	{
		'TICKER 428 Matches': 'CVS Health Corp',
		'MKT CAP': '89.991 B',
		'EPS ESTIMATE': 2.89,
		'REPORTED EPS': 2.98,
		SURPRISE: 0.08,
		'SURPRISE %': '2.77%',
		'REVENUE FORECAST': '140 B',
	},
	{
		'TICKER 428 Matches': 'CVS Health Corp',
		'MKT CAP': '89.991 B',
		'EPS ESTIMATE': 2.89,
		'REPORTED EPS': 2.98,
		SURPRISE: 0.08,
		'SURPRISE %': '2.77%',
		'REVENUE FORECAST': '140 B',
	},
	{
		'TICKER 428 Matches': 'CVS Health Corp',
		'MKT CAP': '89.991 B',
		'EPS ESTIMATE': 2.89,
		'REPORTED EPS': 2.98,
		SURPRISE: 0.08,
		'SURPRISE %': '2.77%',
		'REVENUE FORECAST': '140 B',
	},
	{
		'TICKER 428 Matches': 'CVS Health Corp',
		'MKT CAP': '89.991 B',
		'EPS ESTIMATE': 2.89,
		'REPORTED EPS': 2.98,
		SURPRISE: 0.08,
		'SURPRISE %': '2.77%',
		'REVENUE FORECAST': '140 B',
	},
	{
		'TICKER 428 Matches': 'CVS Health Corp',
		'MKT CAP': '89.991 B',
		'EPS ESTIMATE': 2.89,
		'REPORTED EPS': 2.98,
		SURPRISE: 0.08,
		'SURPRISE %': '2.77%',
		'REVENUE FORECAST': '140 B',
	},
	{
		'TICKER 428 Matches': 'CVS Health Corp',
		'MKT CAP': '89.991 B',
		'EPS ESTIMATE': 2.89,
		'REPORTED EPS': 2.98,
		SURPRISE: 0.08,
		'SURPRISE %': '2.77%',
		'REVENUE FORECAST': '140 B',
	},
];

const EarningsTable = () => {
	return (
		<div className=" max-w-6xl mx-auto mt-8 border border-lightSilver font-poppins">
			<table className="w-full text-left">
				<thead>
					<tr>
						<th className="p-3">TICKER 428 MATCHES</th>
						<th>MKT CAP</th>
						<th>EPS ESTIMATE</th>
						<th>REPORTED EPS</th>
						<th>SURPRISE</th>
						<th>SURPRISE %</th>
						<th>REVENUE FORECAST</th>
					</tr>
				</thead>
				<tbody>
					{data.map((rowData, index) => (
						<tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-primarySilver'}`}>
							{Object.values(rowData).map((value, innerIndex) => (
								<td key={innerIndex} className="p-3 text-sm text-darkGrey font-semibold">
									{value}
									{innerIndex !== 0 && innerIndex !== 5 ? <span className="ml-1 text-xs text-secondarySilver">USD</span> : ''}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default EarningsTable;
