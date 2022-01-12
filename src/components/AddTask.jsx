// Adding a task - onChange catches the typing into the form fields,
// sets the states of the variables and updates the values of the input fields.
import { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import { TaskContext } from '../context/TaskContext';

const AddTask = () => {
	const { dispatch } = useContext(TaskContext),
		{ formDispatch, formState } = useContext(FormContext),
		{ text, day, formReminder } = formState;

	const setValue = (e) => {
		const { name, value } = e.target;

		formDispatch({ type: 'SET_VALUES', payload: { name, value } });
	};

	// Submit the form
	const submitTask = (e) => {
		e.preventDefault();

		// Call dispatch and send the object to the TaskReducer where the task gets
		// passed in as an object in the 'ADD_TASK' case.
		dispatch({
			type: 'ADD_TASK',
			task: {
				text,
				day,
				formReminder,
			},
		});

		formDispatch({ type: 'RESET_VALUES' });
	};

	return (
		// If showAddTask is true, show the Form - if not, keep it hidden.
		// Boolean is passed from the showForm function that's toggled by the Button in the Header.
		formState.showAddTask && (
			<form className="add-form" onSubmit={submitTask}>
				<div className="form-control">
					<label htmlFor="task" className="hidden-visually">
						Task
					</label>
					<input
						type="text"
						placeholder="Add Task"
						name="text"
						value={formState.text}
						onChange={setValue}
						required
					/>
				</div>

				<div className="form-control">
					<label htmlFor="day" className="hidden-visually">
						Day
					</label>
					<input
						type="text"
						placeholder="Add Day & Time"
						name="day"
						value={formState.day}
						onChange={setValue}
						required
					/>
				</div>

				<div className="form-control form-control-check">
					<label htmlFor="reminder">Set reminder</label>
					<input
						type="checkbox"
						checked={formReminder}
						value={formReminder}
						onChange={(e) => {
							const checked = e.currentTarget.checked;

							formDispatch({
								type: 'SET_REMINDER',
								formReminder: checked,
							});
						}}
					/>
				</div>

				<button type="submit" className="btn btn-block" title="Save the task">
					Save task
				</button>
			</form>
		)
	);
};

export default AddTask;
