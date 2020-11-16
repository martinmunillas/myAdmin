import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../utils/styleVars';

const Styled = styled.input`
  height: 50px;
  min-width: 50px;
  -webkit-appearance: none;
  background-color: white;
  vertical-align: middle;
  border: 1px solid #ddd;
  outline: none;
  cursor: pointer;    
  border-radius: 50%;

  &:checked {
    background: ${colors['blue']};
  }
`;

const CheckBox = ({ handleChange }) => <Styled type='checkbox' onChange={handleChange} />;

CheckBox.propTypes = {
    handleChange: PropTypes.func
}

export default CheckBox;
