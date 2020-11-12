import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children, onClick, level, color }) => {
  const getClasses = () => {
    if (level === 'secondary') {
      return `button button__secondary ${color} ${color}Border`;
    } else if (level === 'tertiary') {
      return `button  button__tertiary ${color}`;
    } else {
      return `button  button__primary ${color}Background`;
    }
  };
  return <button className={getClasses()}>{children}</button>;
};

Button.propTypes = {
  onClick: PropTypes.func,
  level: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  color: PropTypes.oneOf(['blue', 'red', 'yellow', 'white', 'black']).isRequired,
};

Button.defaultProps = {
  level: 'primary',
};

export default Button;
