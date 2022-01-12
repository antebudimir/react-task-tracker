import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import Button from './Button';

// passing title so it can be optionally changed in App.js
const Header = ({ title }) => {
	// import context so it can be used to manipulate the button
	const { formState, formDispatch } = useContext(FormContext),
		{ showAddTask } = formState;

	return (
		<header className="header">
			<h1>{title}</h1>

			<Button
				bgColor={showAddTask ? 'red' : 'green'}
				text={showAddTask ? 'Close' : 'Add'}
				toggleForm={() => {
					formDispatch({ type: 'SHOW_FORM', status: showAddTask });
				}}
				buttonTitle={!showAddTask ? 'Open New Task form' : 'Close the Form'}
			/>
		</header>
	);
};

Header.defaultProps = {
	title: 'Task Tracker',
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
