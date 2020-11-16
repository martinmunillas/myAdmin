import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, textSize, textWeight } from '../../utils/styleVars';

const Text = styled.p`
    color: ${props => colors[props.color]};
    font-size: ${props => textSize[props.size]};
    font-weight: ${props => textWeight[props.weight]};
`;

Text.propTypes = {
  size: PropTypes.oneOf(Object.keys(textSize)),
  color: PropTypes.oneOf(Object.keys(colors)),
  weight: PropTypes.oneOf(Object.keys(textWeight)),
};

Text.defaultProps = {
  color: 'white',
  size: 'm',
  weight: 'regular',
};

export default Text;
