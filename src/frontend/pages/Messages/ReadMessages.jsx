import { connect } from 'react-redux';
import React from 'react';

import MessagesTemplate from '../../components/templates/MessagesTemplate';

const ReadMessages = ({ messages }) => {
  return <MessagesTemplate messages={messages} title='Read Messages' />;
};

const mapState = (state) => ({
  messages: state.messages.filter((message) => message.isRead),
});

export default connect(mapState, null)(ReadMessages);
