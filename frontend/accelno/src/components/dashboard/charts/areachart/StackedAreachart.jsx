import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
	{
		name: 'Jan',
		lv: 100,
		uv: 140,
	},
	{
		name: 'Feb',
		lv: 150,
		uv: 80,
	},
	{
		name: 'Mar',
		lv: 170,
		uv: 150,
	},
	{
		name: 'Apr',
		lv: 180,
		uv: 240,
	},
	{
		name: 'May',
		lv: 160,
		uv: 250,
	},
	{
		name: 'Jun',
		lv: 150,
		uv: 230,
	},
	{
		name: 'Jul',
		lv: 100,
		uv: 200,
	},
	{
		name: 'Aug',
		lv: 120,
		uv: 90,
	},
	{
		name: 'Sep',
		lv: 170,
		uv: 220,
	},
	{
		name: 'Oct',
		lv: 180,
		uv: 240,
	},
	{
		name: 'Nov',
		lv: 160,
		uv: 250,
	},
	{
		name: 'Dec',
		lv: 200,
		uv: 245,
	},
];

const gradientColors = [
	{ offset: 0, color: 'rgba(20, 198, 122, 0.7)' },
	{ offset: 0.7115, color: 'rgba(20, 198, 122, 0)' },
];

const gradientColorsSec = [
	{ offset: 0, color: 'rgba(255, 84, 84, 0.9)' },
	{ offset: 1, color: 'rgba(255, 84, 84, 0)' },
];

const StackedAreachart = () => {
	return (
		<AreaChart
			width={460}
			height={200}
			data={data}
			margin={{
				top: 10,
				right: 30,
				left: 0,
				bottom: 0,
			}}
		>
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<defs>
				<linearGradient id="gradientFill" gradientTransform="rotate(180)">
					{gradientColors.map((color) => (
						<stop key={color.offset} offset={color.offset} stopColor={color.color} />
					))}
				</linearGradient>
				<linearGradient id="gradientFillSec" gradientTransform="rotate(180)">
					{gradientColorsSec.map((color) => (
						<stop key={color.offset} offset={color.offset} stopColor={color.color} />
					))}
				</linearGradient>
			</defs>

			<Area type="monotone" dataKey="lv" stackId="1" stroke={false} fill="url(#gradientFillSec)" fillOpacity={0.4} />
			<Area type="monotone" dataKey="uv" stackId="1" stroke={false} fill="url(#gradientFill)" fillOpacity={0.4} />
		</AreaChart>
	);
};

export default StackedAreachart;
