import React from 'react';

import Box from '../atoms/Box';
import Text from '../atoms/Text';
import Title from '../atoms/Title';
import MainLayout from '../layouts/MainLayout/MainLayout';
import MessageCard from '../organisms/MessageCard/MessageCard';

const MessagesTemplate = ({ messages, title }) => {
  console.log(messages);
  return (
    <MainLayout>
      <Title>{title}</Title>
      {!messages.length ? (
        <Box type='tertiary'>
          <Text>No {title.toLowerCase()}</Text>
        </Box>
      ) : (
        <ul>
          {messages.map((message) => (
            <MessageCard {...message} key={message._id} />
          ))}
        </ul>
      )}
    </MainLayout>
  );
};

export default MessagesTemplate;
