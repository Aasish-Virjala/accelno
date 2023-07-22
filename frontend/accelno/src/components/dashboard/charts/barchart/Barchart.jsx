import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts';

const data = [
	{
		name: 'Jan 2023',
		avg: 500,
	},
	{
		name: 'Feb 2023',
		avg: -200,
	},
	{
		name: 'Mar 2023',
		avg: 800,
	},
	{
		name: 'Apr 2023',
		avg: 550,
	},
	{
		name: 'May 2023',
		avg: 400,
	},
	{
		name: 'Jun 2023',
		avg: -250,
	},
	{
		name: 'Jul 2023',
		avg: 700,
	},
];

const Barchart = () => {
	return (
		<ResponsiveContainer width={420} height={250}>
			<BarChart
				width={500}
				height={300}
				data={data}
				stackOffset="sign"
				style={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '12px' }}
				margin={{
					top: 5,
					right: 10,
					left: 10,
					bottom: 5,
				}}
			>
				<XAxis dataKey="name" />
				<YAxis />

				<Tooltip />
				<ReferenceLine y={0} stroke="#000" />
				<Bar dataKey="avg" stackId="stack">
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={entry.avg > 0 ? '#2151C0' : '#BB231B'} width={26} />
					))}
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default Barchart;
