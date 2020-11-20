import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './NavBar.scss';

const NavBar = (props) => {
  const src = {
    home: { path: '/', color: 'black' },
    projects: { path: '/projects', color: 'red' },
    messages: { path: '/messages', color: 'green' },
    ideas: { path: '/ideas', color: 'blue' },
    toDo: { path: '/toDo', color: 'yellow' },
    settings: { path: '/settings', color: 'white' },
  };

  const getClasses = ({ path, color }) => {
    let className = 'navBar__item';
    if (
      props.location.pathname === path ||
      (props.location.pathname.startsWith(path) && path.length - 1)
    ) {
      className += ` ${color}Background`;
    }
    return className;
  };

  const getChildClasses = ({ path }) => {
    let className = 'navBar__item--child';
    if (
      props.location.pathname === path ||
      (props.location.pathname.startsWith(path) && path.length - 1)
    ) {
      className += ` navBar__item--childActive`;
    }
    return className;
  };

  return (
    <nav className='navBar'>
      <Link className={getClasses(src.home)} to={src.home.path}>
        Home
      </Link>
      <Link className={getClasses(src.projects)} to={src.projects.path}>
        Projects
      </Link>
      <ul className={getChildClasses(src.projects)}>
        <li>
          <Link to='/projects'>All Projects</Link>
        </li>
        <li>
          <Link to='/projects/create'>Create Project</Link>
        </li>
      </ul>
      <Link className={getClasses(src.messages)} to={src.messages.path}>
        Messages
      </Link>
      <Link className={getClasses(src.ideas)} to={src.ideas.path}>
        Ideas
      </Link>
      <Link className={getClasses(src.toDo)} to={src.toDo.path}>
        ToDo
      </Link>
      <Link className={getClasses(src.settings)} to={src.settings.path}>
        Settings
      </Link>
    </nav>
  );
};

export default withRouter((props) => <NavBar {...props} />);
