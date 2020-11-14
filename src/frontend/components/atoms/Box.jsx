import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, padding, rounded } from '../../utils/styleVars';

const Box = styled.div`
  border-radius: ${(props) => rounded[props.rounded]};
  padding: ${(props) => padding[props.padding]};
  width: 100%;

  ${(props) => {
    if (props.type === 'secondary') {
      return `border: 1px solid ${colors[props.color]};`;
    } else if (props.type === 'primary') {
      return `background: ${colors[props.color]};`;
    }
  }}

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.direction};
`;

Box.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  color: PropTypes.oneOf(['blue', 'red', 'yellow', 'white', 'black']),
  direction: PropTypes.oneOf(['column', 'row']),
  rounded: PropTypes.oneOf(['none', 'xs', 's', 'm', 'l', 'xl']),
  padding: PropTypes.oneOf(['none', 'xs', 's', 'm', 'l', 'xl']),
};

Box.defaultProps = {
  type: 'primary',
  color: 'white',
  direction: 'column',
  rounded: 'none',
  padding: 'm',
};

export default Box;
