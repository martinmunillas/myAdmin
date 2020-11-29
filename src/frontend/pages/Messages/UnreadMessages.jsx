import { connect } from 'react-redux';
import React from 'react';

import MessagesTemplate from '../../components/templates/MessagesTemplate';

const UnreadMessages = ({ messages }) => {
  return <MessagesTemplate messages={messages} title='Unread Messages' />;
};

const mapState = (state) => ({
  messages: state.messages.filter((message) => !message.isRead),
});

export default connect(mapState, null)(UnreadMessages);
