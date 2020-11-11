import express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { renderToString } from 'react-dom/server';
import { Route, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import dotenv from 'dotenv';
import webpack from 'webpack';

import routes from '../../../frontend/routes/routes';
import reducer from '../../../frontend/redux/reducer';

dotenv.config();
const router = express.Router();

if (process.env.ENV === 'development') {
  const webpackConfig = require('../../../../webpack.config.js');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  router.use(webpackDevMiddleware(compiler, {}));
  router.use(webpackHotMiddleware(compiler));
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : '/build/app.css';
  const mainBuild = manifest ? manifest['main.js'] : '/build/app.js';

  return `<!DOCTYPE html>
          <html lang="en">
          <head>
              <link rel="stylesheet" type="text/css" href="${mainStyles}">
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>martinmunilla.</title>
          </head>
          <body>
              <div id="root">${html}</div>
              <script>
              window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
                /</g,
                '\\u003c'
              )}
              </script>
              <script src="${mainBuild}"></script>
          </body>
          </html>`;
};

const renderApp = (req, res) => {
  const initialState = { projects: [{ name: 'Muniflix' }] };
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {routes.map((route, i) => (
          <Route {...route} key={i} />
        ))}
      </StaticRouter>
    </Provider>
  );

  res.send(setResponse(html, preloadedState, req.hashManifest));
};

router.use('*', renderApp);

export default router;
