import styled from 'styled-components';
import Proptypes from 'prop-types';
import { colors } from '../../utils/styleVars';

const Text = styled.p`
    color: ${props => colors[props.color]}
    font-size: ${props => textSize[props.size]}
`;

Text.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l']),
  color: PropTypes.oneOf(['blue', 'red', 'yellow', 'white', 'black']),
};

Text.defaultProps = {
  color: 'white',
  size: 'm',
};

export default Text;
