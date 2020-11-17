import React from 'react';
import { connect } from 'react-redux';

import { completeToDoRequest } from '../../../redux/actions';

import Box from '../../atoms/Box';
import CheckBox from '../../atoms/CheckBox';
import Text from '../../atoms/Text';

import './ToDoCard.scss';

const ToDoCard = (props) => {
  const { task, date, _id } = props;
  const handleComplete = () => {
    props.completeToDoRequest({ _id });
  };

  return (
    <Box
      type='primary'
      color='yellow'
      direction='column'
      rounded='xl'
      padding='s'
      className='toDoCard'
      align='ss'
    >
      <Box type='primary' direction='row' color='white' align='sc' padding='s' rounded='l'>
        <CheckBox onChange={handleComplete} />
        <Text color='black' className='toDoCard__task'>
          {task}
        </Text>
      </Box>
    </Box>
  );
};

const mapDispatch = {
  completeToDoRequest,
};

export default connect(null, mapDispatch)(ToDoCard);
