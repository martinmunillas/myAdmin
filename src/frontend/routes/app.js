import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import routes from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;