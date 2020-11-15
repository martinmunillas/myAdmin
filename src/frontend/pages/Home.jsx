import React from 'react';
import { connect } from 'react-redux';

import Title from '../components/atoms/Title';
import MainLayout from '../components/layouts/MainLayout/MainLayout';

const Home = (props) => {
  return (
    <MainLayout>
      <Title blue>Welcome {props.user.name}!</Title>
    </MainLayout>
  );
};

const mapState = (state) => ({
  user: state.user,
});

export default connect(mapState, null)(Home);
