import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../utils/styleVars';

const Button = styled.button`
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: 600;
  min-width: 100px;
  max-width: 300px;
  margin-top: 10px;
  font-size: 18px;
  cursor: pointer;

  ${props => props.level === 'secondary' && `
  color: ${colors[props.color]};
  border: 2px solid ${colors[props.color]};
  `}

  ${props => props.level === 'primary' && `
  color: ${colors['white']};
  background: ${colors[props.color]};
  `}
`;

Button.propTypes = {
  level: PropTypes.oneOf(['primary', 'secondary']),
  color: PropTypes.oneOf(['blue', 'red', 'yellow', 'white', 'black']).isRequired,
};

Button.defaultProps = {
  level: 'primary',
};

export default Button;
