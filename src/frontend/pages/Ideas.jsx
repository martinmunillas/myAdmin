import React from 'react';
import { connect } from 'react-redux';

import Title from '../components/atoms/Title';
import MainLayout from '../components/layouts/MainLayout/MainLayout';

const Ideas = (props) => {
  return (
    <MainLayout>
      <Title color="blue">Ideas</Title>
    </MainLayout>
  );
};

const mapState = (state) => ({
  ideas: state.ideas,
});

export default connect(mapState, null)(Ideas);
