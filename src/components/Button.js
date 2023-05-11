import { PropTypes } from 'prop-types';

const Button = ({ text, purpose, id }) => (
  <div>
    <button type="submit" className="book-adder" id={id} onClick={(e) => { purpose(e); }}>
      {' '}
      {text}
    </button>
  </div>
);
Button.propTypes = { text: PropTypes.string.isRequired };
Button.propTypes = { purpose: PropTypes.func.isRequired };
Button.propTypes = { id: PropTypes.string.isRequired };
export default Button;
