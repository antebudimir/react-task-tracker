import { v4 as uuidv4 } from 'uuid';

// state will be tasks, and action dispatch in the TaskContext
export const taskReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TASK':
			return [
				// spread state, i.e. tasks, and add a new task object:
				...state,
				// newTask = { id, ...task } becomes a direct object:
				{
					text: action.task.text,
					day: action.task.day,
					reminder: action.task.formReminder,
					id: uuidv4(),
				},
			];

		case 'DELETE_TASK':
			// filter state, i.e. tasks
			return state.filter((task) => task.id !== action.id);

		case 'TOGGLE_REMINDER':
			return state.map((task) => {
				// setting the reminder to the opposite of whatever it is
				return task.id === action.id
					? { ...task, reminder: !task.reminder }
					: task;
			});

		default:
			return state;
	}
};
