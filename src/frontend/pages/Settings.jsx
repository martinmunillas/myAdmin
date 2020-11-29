import React from 'react';
import { connect } from 'react-redux';

import Title from '../components/atoms/Title';
import MainLayout from '../components/layouts/MainLayout/MainLayout';

const Settings = (props) => {
  return (
    <MainLayout>
      <Title color="blue">Settings</Title>
    </MainLayout>
  );
};

export default Settings;
