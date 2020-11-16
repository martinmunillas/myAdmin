import { connect } from 'react-redux';
import React from 'react';

import Title from '../components/atoms/Title';
import MainLayout from '../components/layouts/MainLayout/MainLayout';
import MessageCard from '../components/organisms/MessageCard/MessageCard';

const Messages = ({ messages }) => {
  return (
    <MainLayout>
      <Title>Messages</Title>
      <ul>
        {messages.map((message) => (
          <MessageCard {...message} key={message._id} />
        ))}
      </ul>
    </MainLayout>
  );
};

const mapState = (state) => ({
  messages: state.messages,
});

export default connect(mapState, null)(Messages);
