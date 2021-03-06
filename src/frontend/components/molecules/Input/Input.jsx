import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ title, type, name, onChange, inputType, value }) => {
  return (
    <div className='input'>
      {title && <label>{title}</label>}
      {type === 'input' && <input type={inputType} name={name} onChange={onChange} value={value}/>}
      {type === 'textarea' && <textarea name={name} onChange={onChange} value={value}/>}
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['input', 'textarea']),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'input',
};

export default Input;
