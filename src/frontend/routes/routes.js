import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Projects from '../pages/Projects';
import Messages from '../pages/Messages';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/projects',
    component: Projects,
  },
  {
    exact: true,
    path: '/messages',
    component: Messages,
  },
  {
    exact: true,
    path: '/sign-in',
    component: SignIn,
  },
];

export default routes;
