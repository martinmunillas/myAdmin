import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Title from '../../components/atoms/Title';
import MainLayout from '../../components/layouts/MainLayout/MainLayout';

const Settings = (props) => {
  return (
    <MainLayout>
      <Title>Settings</Title>
      <Link to='/settings/portfolioInfo'>Update portfolio info</Link>
    </MainLayout>
  );
};

export default Settings;
