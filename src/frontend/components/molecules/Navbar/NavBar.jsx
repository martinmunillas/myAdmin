import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {
  return (
      <nav className='navBar'>
        <Link className='navBar__item navBar__item--active' to='/home'>Home</Link>
        <Link className='navBar__item' to='/projects'>Projects</Link>
        <Link className='navBar__item' to='/messages'>Messages</Link>
        <Link className='navBar__item' to='/ideas'>Ideas</Link>
        <Link className='navBar__item' to='/toDo'>ToDo</Link>
        <Link className='navBar__item' to='/settings'>Settings</Link>
      </nav>
  );
};

export default NavBar;
