import React from 'react';
import { connect } from 'react-redux';
import Box from '../components/atoms/Box';

import Title from '../components/atoms/Title';
import MainLayout from '../components/layouts/MainLayout/MainLayout';

const NotFound = (props) => {
  return (
    <MainLayout>
      <Box color='red' rounded='m'>
        <Title color='white'>404 Not Found</Title>
      </Box>
    </MainLayout>
  );
};

export default NotFound;
