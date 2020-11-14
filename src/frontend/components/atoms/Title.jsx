import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, titleSize } from '../../utils/styleVars';

const Title = styled.h2`
  font-size: ${(props) => titleSize[props.size]};
  color: ${(props) => colors[props.color]};
`;

Title.propTypes = {
  color: PropTypes.oneOf(['blue', 'red', 'yellow', 'white', 'black']),
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
};

Title.defaultProps = {
  color: 'white',
  size: 'm',
};

export default Title;
