export const formReducer = (state, action) => {
	const { type, status, payload, formReminder } = action;

	switch (type) {
		case 'SHOW_FORM':
			return {
				...state,
				showAddTask: !status,
			};

		case 'SET_VALUES':
			return {
				...state,
				[payload.name]: payload.value,
			};

		case 'RESET_VALUES':
			return {
				...state,
				text: '',
				day: '',
				formReminder: false,
			};

		case 'SET_REMINDER':
			return {
				...state,
				formReminder,
			};

		default:
			return state;
	}
};
