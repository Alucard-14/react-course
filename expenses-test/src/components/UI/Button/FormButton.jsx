import PropTypes from 'prop-types';

const FormButton = ({ label, type, ...props }) => (
  <button
    className='cursor-pointer py-4 px-8 border border-solid border-[#40005d] bg-[#40005d] text-white rounded-xl mr-4'
    type=''
    {...props}>
    {label}
  </button>
);

export default FormButton;

FormButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  props: PropTypes.shape({
    onClick: PropTypes.func,
  }),
};
