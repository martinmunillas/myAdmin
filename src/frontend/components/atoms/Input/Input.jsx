import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss'

const Input = ({ title, type, name, onChange, secondary }) => {
  return (
    <div className='input'>
      <label>{title}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className={secondary ? 'input__secondary' : 'input__primary'}
      />
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  secondary: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
