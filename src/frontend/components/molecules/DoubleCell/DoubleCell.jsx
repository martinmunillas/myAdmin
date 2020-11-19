import React from 'react';

import './DoubleCell.scss'

const DoubleCell = ({first, second}) => {
  return (
    <div className='doubleCell'>
      <div className='doubleCell__child'>{first}</div>
      <div className='doubleCell__child'>{second}</div>
    </div>
  );
};

export default DoubleCell