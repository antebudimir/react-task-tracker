import PropTypes from 'prop-types';

// passing props so they can be manipulated wherever the Button ends up (e.g. Header)
const Button = ({ bgColor, text, toggleForm, buttonTitle }) => {
	return (
		<button
			className="btn"
			style={{ backgroundColor: bgColor }}
			onClick={toggleForm}
			title={buttonTitle}
		>
			{text}
		</button>
	);
};

Button.defaultProps = {
	bgColor: 'black',
	text: 'Button',
	buttonTitle: 'Button',
};

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	// toggleForm: PropTypes.func.isRequired,
	buttonTitle: PropTypes.string,
};

export default Button;
