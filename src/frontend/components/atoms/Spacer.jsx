import styled from 'styled-components';
import PropTypes from 'prop-types';
import { margin } from '../../utils/styleVars';

const Spacer = styled.div`
  width: ${(props) => (props.direction == 'row' ? margin[props.size] : '100%')};
  height: ${(props) => (props.direction == 'column' ? margin[props.size] : '100%')};
`;

Spacer.propTypes = {
  size: PropTypes.oneOf(Object.keys(margin)),
  direction: PropTypes.oneOf(['row', 'column']),
};

Spacer.defaultProps = {
  size: 'm',
  direction: 'column',
};

export default Spacer;
