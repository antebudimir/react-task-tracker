import { FaTimes } from 'react-icons/fa';

// passing props to be used in Tasks and assigned actions via dispatch
const Task = ({ taskDetails, onDelete, reminderProp }) => {
	// Have to be the same variable names as defined in AddTask states
	const { text, day, reminder, id } = taskDetails;

	return (
		<div
			// Adding the class name reminder if the reminder is set to be true
			className={`task${reminder ? ' reminder' : ''}`}
			onDoubleClick={() => {
				return reminderProp(id);
			}}
		>
			<h3>
				{text}
				<FaTimes
					title="Delete task"
					style={closeIcon}
					onClick={() => {
						return onDelete(id);
					}}
				/>
			</h3>

			<p>{day}</p>
			<p>{reminder}</p>
		</div>
	);
};

const closeIcon = {
	color: 'red',
};

export default Task;
