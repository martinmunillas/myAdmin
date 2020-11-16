import express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { renderToString } from 'react-dom/server';
import { Route, StaticRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import dotenv from 'dotenv';
import axios from 'axios';
import jwt from 'jsonwebtoken';

import routes from '../../../frontend/routes/routes';
import reducer from '../../../frontend/redux/reducer';

dotenv.config();
const router = express.Router();

const { ENV, URL, AUTH_JWT } = process.env;
const isDev = ENV === 'development';

if (isDev) {
  const webpack = require('webpack');
  const webpackConfig = require('../../../../webpack.config.js');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  router.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
      stats: { colors: true },
      watchOptions: {
        aggregateTimeout: 300,
        poll: true,
      },
    })
  );
  router.use(
    webpackHotMiddleware(compiler, {
      log: console.log,
    })
  );
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

const renderApp = async (req, res) => {
  const getInitialState = async () => {
    try {
      const { name, email, id, token } = req.cookies;
      const projects = await axios({
        method: 'GET',
        url: `${URL}/api/projects`,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return {
        user: { name, email, id },
        projects: projects.data.data,
      };
    } catch (error) {
      if (isDev) {
        console.log('Error:', error.message);
      }
      return {};
    }
  };
  const initialState = await getInitialState();
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Switch>
          {routes.map((route) => (
            <Route {...route} key={route.path} />
          ))}
        </Switch>
      </StaticRouter>
    </Provider>
  );

  res.send(setResponse(html, preloadedState, req.hashManifest));
};

const checkAuth = async (req, res, next) => {
  if (req.url !== '/sign-in') {
    try {
      await jwt.verify(req.cookies.token, AUTH_JWT);
      next();
    } catch (error) {
      res.redirect('/sign-in');
    }
  } else {
    try {
      await jwt.verify(req.cookies.token, AUTH_JWT);
      res.redirect('/');
    } catch (error) {
      next();
    }
  }
};

router.use([checkAuth, renderApp]);

export default router;
