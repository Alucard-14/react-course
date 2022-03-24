import PropTypes from 'prop-types';

const Button = ({ label, ...props }) => <button {...props}>{label}</button>;

export default Button;

Button.propTypes = {
  label: PropTypes.string,
  props: PropTypes.any,
};
