import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import Task from './Task';

const Tasks = () => {
	const { tasks, dispatch } = useContext(TaskContext);

	// Are there any tasks - if not, show the message.
	return tasks.length > 0 ? (
		<section>
			{tasks.map((task) => {
				return (
					<Task
						key={task.id}
						// taskDetails gets values from the TaskContext tasks state
						taskDetails={task}
						onDelete={() => {
							dispatch({
								type: 'DELETE_TASK',
								id: task.id,
							});
						}}
						reminderProp={() => {
							dispatch({
								type: 'TOGGLE_REMINDER',
								id: task.id,
							});
						}}
					/>
				);
			})}
		</section>
	) : (
		"Don't get bored - add some tasks."
	);
};

export default Tasks;
