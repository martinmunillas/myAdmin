import React from 'react';
import NavBar from '../../molecules/NavBar/NavBar';

import './MainLayout.scss'

const MainLayout = ({ children }) => {
  return (
    <div className='mainLayout'>
      <NavBar />
      <div className='mainLayout__children'>{children}</div>
    </div>
  );
};

export default MainLayout;
