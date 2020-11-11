import React from 'react';
import NavBar from '../../molecules/Navbar/NavBar';

import './mainLayout.scss'

const MainLayout = ({ children }) => {
  return (
    <div className='mainLayout'>
      <NavBar />
      <div className='mainLayout__children'>{children}</div>
    </div>
  );
};

export default MainLayout;
