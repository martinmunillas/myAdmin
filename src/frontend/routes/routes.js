import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Projects from '../pages/Projects/Projects';
import CreateProject from '../pages/Projects/CreateProject';
import UnreadMessages from '../pages/Messages/UnreadMessages';
import AllMessages from '../pages/Messages/AllMessages';
import ReadMessages from '../pages/Messages/ReadMessages';
import ToDo from '../pages/ToDo';
import ProjectDetail from '../pages/Projects/ProjectDetail';
import EditProject from '../pages/Projects/EditProject';
import Settings from '../pages/Settings';
import Ideas from '../pages/Ideas';
import NotFound from '../pages/NotFound';

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
    path: '/projects/create',
    component: CreateProject,
  },
  {
    exact: true,
    path: '/projects/:id/edit',
    component: EditProject,
  },
  {
    exact: true,
    path: '/projects/:id',
    component: ProjectDetail,
  },
  {
    exact: true,
    path: '/messages',
    component: UnreadMessages,
  },
  {
    exact: true,
    path: '/messages/read',
    component: ReadMessages,
  },
  {
    exact: true,
    path: '/messages/all',
    component: AllMessages,
  },
  {
    exact: true,
    path: '/toDo',
    component: ToDo,
  },
  {
    exact: true,
    path: '/settings',
    component: Settings,
  },
  {
    exact: true,
    path: '/ideas',
    component: Ideas,
  },
  {
    exact: true,
    path: '/sign-in',
    component: SignIn,
  },
  {
    component: NotFound,
  },
];

export default routes;
