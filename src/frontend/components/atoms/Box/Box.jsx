import React from 'react';
import PropTypes from 'prop-types';

import './Box.scss'

const Box = ({ children, primary, color, shape }) => {
  const getClasses = () => {
    if (primary) {
      return `box__primary ${color}Background box__${shape}`;
    } else {
      return `box__secondary ${color}Border box__${shape}`;
    }
  };
  return <div className={`box ${getClasses()}`}>{children}</div>;
};

Box.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  color: PropTypes.oneOf(['blue', 'red', 'yellow', 'white', 'black']),
  shape: PropTypes.oneOf(['column', 'row']),
};

Box.defaultProps = {
  color: 'white',
  shape: 'column'
};

export default Box;
