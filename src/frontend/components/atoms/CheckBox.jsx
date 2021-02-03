import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../utils/styleVars';

const Styled = styled.input`
  height: 50px;
  min-width: 50px;
  -webkit-appearance: none;
  background-color: white;
  vertical-align: middle;
  border: 1px solid #5f5f5f;
  outline: none;
  cursor: pointer;    
  border-radius: 50%;
  align-self: flex-start;

  &:checked {
    background: ${(props) => colors[props.color]};
  }
`;

const CheckBox = (props) => (
  <Styled type='checkbox' {...props} />
);

CheckBox.propTypes = {
  handleChange: PropTypes.func,
};

CheckBox.defaultProps = {
  color: 'black',
};

export default CheckBox;
