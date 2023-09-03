import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { curveCardinal } from 'd3-shape';

const data = [
	{
		name: 'Jan',
		val: 18.5,
	},
	{
		name: 'Feb',
		val: 26.1,
	},
	{
		name: 'Mar',
		val: 16.5,
	},
	{
		name: 'Apr',
		val: 30.5,
	},
	{
		name: 'May',
		val: 36.3,
	},
	{
		name: 'Jun',
		val: 43.2,
	},
];

const gradientColors = [
	{ offset: '0%', color: 'rgba(20, 198, 122, 0.8)' },
	{ offset: '50%', color: 'rgba(20, 198, 122, 0.216)' },
	{ offset: '100%', color: 'rgba(20, 198, 122, 0)' },
];

const Areachart = ({ size }) => {
	const cardinal = curveCardinal.tension(0.2);

	return (
		<AreaChart
			width={size === 'small' ? 330 : size === 'medium' ? 390 : 440}
			height={size === 'small' ? 160 : size === 'medium' ? 200 : 240}
			data={data}
			style={{ fontSize: '0.7rem', fontWeight: '500', FontFamily: 'Inter' }}
			margin={{
				top: 10,
				right: 30,
				left: 0,
				bottom: 0,
			}}
		>
			<XAxis dataKey="name" />
			<YAxis orientation="right" />
			<Tooltip />

			<defs>
				<linearGradient id="gradientFill" gradientTransform="rotate(180)">
					{gradientColors.map((color) => (
						<stop key={color.offset} offset={color.offset} stopColor={color.color} />
					))}
				</linearGradient>
			</defs>

			<Area type={cardinal} dataKey="val" stroke="#14C67A" fill="url(#gradientFill)" fillOpacity={0.2} />
		</AreaChart>
	);
};

export default Areachart;
