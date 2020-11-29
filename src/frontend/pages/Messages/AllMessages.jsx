import { connect } from 'react-redux';
import React from 'react';

import MessagesTemplate from '../../components/templates/MessagesTemplate';

const AllMessages = ({ messages }) => {
  return <MessagesTemplate messages={messages} title='All Messages' />;
};

const mapState = (state) => ({
  messages: state.messages,
});

export default connect(mapState, null)(AllMessages);
