import React from 'react';

import Box from '../../atoms/Box';
import CheckBox from '../../atoms/CheckBox';
import Text from '../../atoms/Text';

import './ToDoCard.scss';

const ToDoCard = ({ task, date }) => {
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
        <CheckBox />
        <Text color='black' className='toDoCard__task'>
          {task}
        </Text>
      </Box>
    </Box>
  );
};

export default ToDoCard;
