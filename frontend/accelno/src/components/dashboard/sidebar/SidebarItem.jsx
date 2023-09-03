import { useDrag } from 'react-dnd';

const SidebarItem = ({ widgetType }) => {
	const [, drag] = useDrag({
		type: 'WIDGET', // A unique identifier for the type of draggable item
		item: { widgetType },
	});

	return (
		<div ref={drag} className="sidebar-item">
			{widgetType}
		</div>
	);
};

export default SidebarItem;
