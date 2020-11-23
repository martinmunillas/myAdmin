import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ErrorMessage from '../components/organisms/ErrorMessage/ErrorMessage'
import Loading from '../components/organisms/Loading/Loading';

import routes from './routes';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Switch>
      </BrowserRouter>
      <ErrorMessage />
      <Loading />
    </>
  );
};

export default App;
