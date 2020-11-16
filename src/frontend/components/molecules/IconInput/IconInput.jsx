import React from 'react';

import Input from '../../atoms/Input/Input';

import './IconInput.scss';

const IconInput = (props) => {
  return (
    <div>
      <Input type={props.type} name={props.name} placeholder={props.placeholder} />
    </div>
  );
};

export default IconInput;
