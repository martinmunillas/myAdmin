import React from 'react';

import './Title.scss';

const Title = ({ children }) => {
  return (
    <>
      <h2 className='title'>{children}</h2>
    </>
  );
};

export default Title;
