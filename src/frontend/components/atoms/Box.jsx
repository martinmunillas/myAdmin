import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, margin, padding, rounded } from '../../utils/styleVars';

const Box = styled.div`
  border-radius: ${(props) => rounded[props.rounded]};
  padding: ${(props) => padding[props.padding]};
  width: 100%;
  height: 100%;

  ${(props) => {
    if (props.type === 'secondary') {
      return `border: 1px solid ${colors[props.color]};`;
    } else if (props.type === 'primary') {
      return `background: ${colors[props.color]};`;
    }
  }}

  display: flex;
  justify-content: ${(props) => {
    if (props.align[0] === 's') {
      return 'flex-start';
    }
    if (props.align[0] === 'c') {
      return 'center';
    }
    if (props.align[0] === 'e') {
      return 'flex-end';
    }
  }};
  align-items: ${(props) => {
    if (props.align[1] === 's') {
      return 'flex-start';
    }
    if (props.align[1] === 'c') {
      return 'center';
    }
    if (props.align[1] === 'e') {
      return 'flex-end';
    }
  }};
  flex-direction: ${(props) => props.direction};
`;

Box.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  color: PropTypes.oneOf(Object.keys(colors)),
  direction: PropTypes.oneOf(['column', 'row']),
  rounded: PropTypes.oneOf(Object.keys(rounded)),
  padding: PropTypes.oneOf(Object.keys(padding)),
  align: PropTypes.oneOf(['ss', 'sc', 'se', 'cs', 'cc', 'ce', 'es', 'ec', 'ee']),
};

Box.defaultProps = {
  type: 'primary',
  color: 'white',
  direction: 'column',
  rounded: 'none',
  padding: 'm',
  align: 'cc',
};

export default Box;
