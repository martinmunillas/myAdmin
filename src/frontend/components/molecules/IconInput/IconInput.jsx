import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import './IconInput.scss';

const IconInput = (props) => {
  return (
    <div className='iconInput'>
      <input
        type='text'
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value || ''}
      />
      <button type='submit' className='iconInput__button'>
        <FontAwesomeIcon icon={faPlusCircle} size='3x' />
      </button>
    </div>
  );
};

export default IconInput;
