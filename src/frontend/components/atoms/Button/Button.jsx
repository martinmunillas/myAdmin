import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children, type, level, color, className }) => {
  const getClasses = () => {
    let finalClass = 'button button';
    if (level === 'secondary') {
      finalClass += `__secondary ${color} ${color}Border`;
    } else if (level === 'tertiary') {
      finalClass += `__tertiary ${color}`;
    } else {
      finalClass += `__primary ${color}Background`;
    }

    if (className) {
      finalClass += ' ' + className;
    }

    return finalClass;
  };
  return <button className={getClasses()} type={type}>{children}</button>;
};

Button.propTypes = {
  onClick: PropTypes.func,
  level: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  color: PropTypes.oneOf(['blue', 'red', 'yellow', 'white', 'black']).isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  level: 'primary',
};

export default Button;
