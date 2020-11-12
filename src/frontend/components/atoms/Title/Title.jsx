import React from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

const Title = ({ children, color }) => {
  return (
    <>
      <h2 className={`title ${color}`}>{children}</h2>
    </>
  );
};

Title.propTypes = {
  color: PropTypes.oneOf(['blue', 'red', 'yellow', 'white', 'black']),
};

Title.defaultProps = {
  color: 'white',
};

export default Title;
