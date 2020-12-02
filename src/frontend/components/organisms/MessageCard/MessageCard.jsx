import React from 'react';
import { format } from 'date-fns';
import { connect } from 'react-redux';

import {
  deleteMessageRequest,
  readMessageRequest,
  unreadMessageRequest,
} from '../../../redux/actions';

import Box from '../../atoms/Box';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import Spacer from '../../atoms/Spacer';

import './MessageCard.scss';

const MessageCard = (props) => {
  const { name, email, message, date, isRead, _id } = props;

  const handleDelete = (e) => {
    props.deleteMessageRequest({ id: _id });
  };

  const handleRead = (e) => {
    props.readMessageRequest({ id: _id });
  };

  const handleUnread = (e) => {
    props.unreadMessageRequest({ id: _id });
  };

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
        {name}({email}) - {format(new Date(date), 'dd/MM/yyyy - hh:mm')}
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

        <Box type='tertiary' direction='row' padding='none' width={40}>
          <Spacer direction='row' />
          <Box type='tertiary' direction='column' padding='none'>
            {!isRead ? (
              <Button color='blue' onClick={handleRead}>
                Mark as read
              </Button>
            ) : (
              <Button color='black' onClick={handleUnread}>
                Mark as unread
              </Button>
            )}

            <Button color='red' onClick={handleDelete}>
              Delete
            </Button>

            <Button color='black'>Reply ➡</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const mapDispatch = {
  deleteMessageRequest,
  readMessageRequest,
  unreadMessageRequest,
};

export default connect(null, mapDispatch)(MessageCard);
