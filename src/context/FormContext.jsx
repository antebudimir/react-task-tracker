import { createContext, useReducer } from 'react';
import { formReducer } from '../reducers/formReducer';

export const FormContext = createContext();

const initialState = {
	showAddTask: false,
	text: '',
	day: '',
	formReminder: false,
};

const FormProvider = (props) => {
	const [formState, formDispatch] = useReducer(formReducer, initialState);

	return (
		// passing props for global availability
		<FormContext.Provider value={{ formState, formDispatch }}>
			{props.children}
		</FormContext.Provider>
	);
};

export default FormProvider;
