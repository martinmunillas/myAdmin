import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, margin, padding, rounded } from '../../utils/styleVars';

const Box = styled.div`
  border-radius: ${(props) => rounded[props.rounded]};
  padding: ${(props) => padding[props.padding]};
  width: ${(props) => props.width}%;
  height: 100%;
  margin-top: ${(props) => props.marginTop}px;

  ${(props) => {
    if (props.type === 'secondary') {
      return `border: 8px solid ${colors[props.color]};`;
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

const numberStringValidator = (props, propName, componentName) =>
  /[^\d]+/.test(props[propName]) &&
  new Error(
    'Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed.'
  );

Box.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  color: PropTypes.oneOf(Object.keys(colors)),
  direction: PropTypes.oneOf(['column', 'row']),
  rounded: PropTypes.oneOf(Object.keys(rounded)),
  padding: PropTypes.oneOf(Object.keys(padding)),
  align: PropTypes.oneOf(['ss', 'sc', 'se', 'cs', 'cc', 'ce', 'es', 'ec', 'ee']),
  width: numberStringValidator,
  marginTop: numberStringValidator,
};

Box.defaultProps = {
  type: 'primary',
  color: 'white',
  direction: 'column',
  rounded: 'none',
  padding: 'm',
  align: 'cc',
  width: 100,
};

export default Box;
