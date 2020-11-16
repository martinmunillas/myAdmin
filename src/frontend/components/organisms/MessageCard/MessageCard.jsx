import React from 'react';
import { format } from 'date-fns';

import Box from '../../atoms/Box';
import Button from '../../atoms/Button/Button';
import Text from '../../atoms/Text';

import './MessageCard.scss';

const MessageCard = ({ name, mail, message, date }) => {
  return (
    <Box
      type='primary'
      color='green'
      direction='column'
      rounded='l'
      padding='m'
      className='messageCard'
      align='ss'
    >
      <Text color='white' weight='bold'>
        {name}({mail}) - {format(new Date(date), 'dd/MM/yyyy - hh:mm')}
      </Text>
      <Box type='tertiary' direction='row' padding='none' align='ss'>
        <Box
          type='primary'
          color='white'
          align='ss'
          padding='s'
          rounded='m'
          className='messageCard__message'
        >
          <Text color='black'>{message}</Text>
        </Box>
        <Box type='tertiary' direction='column' padding='none' width={40}>
          <Button color='blue'>Mark as seen</Button>
          <Button color='red'>Delete</Button>
          <Button color='black'>Reply ➡</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageCard;
