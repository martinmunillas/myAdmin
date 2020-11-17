import React, { useState } from 'react';
import { connect } from 'react-redux';

import IconInput from '../../molecules/IconInput/IconInput';

import { createToDoRequest } from '../../../redux/actions'

import './NewToDoCard.scss';

const NewToDoCard = (props) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createToDoRequest({task: value});
    setValue('')
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <IconInput name='task' placeholder='New ToDo...' onChange={handleChange} value={value} />
    </form>
  );
};
const mapDispatch = {
  createToDoRequest
}

export default connect(null, mapDispatch)(NewToDoCard);
