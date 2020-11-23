import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Projects from '../pages/Projects';
import CreateProject from '../pages/CreateProject';
import Messages from '../pages/Messages';
import ToDo from '../pages/ToDo';
import ProjectDetail from '../pages/ProjectDetail';
import EditProject from '../pages/EditProject';

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
    component: Messages,
  },
  {
    exact: true,
    path: '/toDo',
    component: ToDo,
  },
  {
    exact: true,
    path: '/sign-in',
    component: SignIn,
  },
];

export default routes;
