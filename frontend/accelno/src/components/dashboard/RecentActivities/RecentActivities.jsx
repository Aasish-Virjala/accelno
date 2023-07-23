import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdPaid, MdMoreVert } from 'react-icons/md';

const RecentActivities = () => {
	return (
		<div className="activity-container my-20 mx-auto w-96 px-5 py-10 font-poppins overflow-y-scroll">
			<div className="flex justify-between mb-4 text-xl">
				<h1 className=" font-semibold text-darkGrey"> RECENT </h1>
				<MdMoreVert />
			</div>
			<VerticalTimeline layout="1-column-left" lineColor="#2D2F35">
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ color: '#2D2F35', border: 'none', boxShadow: 'none' }}
					contentArrowStyle={{ display: 'none' }}
					date="10 minutes ago"
					iconStyle={{ background: '#2151C0', color: '#fff' }}
					icon={<MdPaid />}
				>
					<h1 className="font-bold text-darkGrey text-lg"> You Sold an item </h1>
					<p>Curabitur non leo mauris. Quisque dapibus massa in nisi tincidunt, vitae lacinia ex vestibulum.</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ color: '#2D2F35', border: 'none', boxShadow: 'none' }}
					contentArrowStyle={{ display: 'none' }}
					date="10 minutes ago"
					iconStyle={{ background: '#2151C0', color: '#fff' }}
					icon={<MdPaid />}
				>
					<h1 className="font-bold text-darkGrey text-lg"> You Sold an item </h1>
					<p>Curabitur non leo mauris. Quisque dapibus massa in nisi tincidunt, vitae lacinia ex vestibulum.</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ color: '#2D2F35', border: 'none', boxShadow: 'none' }}
					contentArrowStyle={{ display: 'none' }}
					date="10 minutes ago"
					iconStyle={{ background: '#2151C0', color: '#fff' }}
					icon={<MdPaid />}
				>
					<h1 className="font-bold text-darkGrey text-lg"> You Sold an item </h1>
					<p>Curabitur non leo mauris. Quisque dapibus massa in nisi tincidunt, vitae lacinia ex vestibulum.</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement iconStyle={{ background: '#2151C0', color: '#fff' }} icon={<MdPaid />} />
			</VerticalTimeline>
		</div>
	);
};

export default RecentActivities;
