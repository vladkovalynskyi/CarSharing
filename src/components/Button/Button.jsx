import { StylesButton, Text } from './Button.styled';
import PropTypes from 'prop-types';


export default function Button({ text, onClick, width }) {
  return (
    <StylesButton
      variant="contained"
      onClick={onClick}
      style={{ width: width }}
    >
      <Text>{text}</Text>
    </StylesButton>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.string,
};