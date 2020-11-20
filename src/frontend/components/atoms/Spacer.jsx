import styled from 'styled-components';
import PropTypes from 'prop-types';
import { margin } from '../../utils/styleVars';

const Spacer = styled.div`
  width: 100%;
  height: ${(props) => margin[props.size]};
`;

Spacer.propTypes = {
  size: PropTypes.oneOf(Object.keys(margin)),
};

Spacer.defaultProps = {
  size: 'm',
};

export default Spacer;
