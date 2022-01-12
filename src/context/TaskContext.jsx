// Context for adding & deleting tasks
import { createContext, useEffect, useReducer } from 'react';
import { taskReducer } from '../reducers/taskReducer';

export const TaskContext = createContext();

const TaskProvider = (props) => {
	// 3rd argument ignores the 2nd one if there's anything in local storage
	const [tasks, dispatch] = useReducer(taskReducer, [], () => {
		const localData = localStorage.getItem('myTasks');

		return localData ? JSON.parse(localData) : [];
	});

	// Save tasks to localStorage on every change
	useEffect(() => {
		localStorage.setItem('myTasks', JSON.stringify(tasks));
	}, [tasks]);

	return (
		// passing props for global availability
		<TaskContext.Provider value={{ tasks, dispatch }}>
			{props.children}
		</TaskContext.Provider>
	);
};

export default TaskProvider;
