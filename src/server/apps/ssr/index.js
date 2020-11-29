import express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { renderToString } from 'react-dom/server';
import { Route, StaticRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import dotenv from 'dotenv';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { StyleSheetManager, ServerStyleSheet } from 'styled-components';
import { dom } from '@fortawesome/fontawesome-svg-core';

import routes from '../../../frontend/routes/routes';
import reducer from '../../../frontend/redux/reducer';

import getManifest from './middlewares/getManifest';

dotenv.config();
const router = express.Router();

const { ENV, URL, AUTH_JWT } = process.env;
const isDev = ENV === 'development';

router.use(express.static(__dirname + '/public'));
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
      watchOptions: {},
    })
  );
  router.use(
    webpackHotMiddleware(compiler, {
      log: console.log,
    })
  );
} else {
  router.use(getManifest);
}

const setResponse = (html, preloadedState, manifest, styles) => {
  const mainStyles = manifest ? `/build${manifest['main.css']}` : '/app.css';
  const mainBuild = manifest ? `/build${manifest['main.js']}` : '/app.js';

  return `<!DOCTYPE html>
          <html lang="en">
          <head>
              <link rel="stylesheet" type="text/css" href="${mainStyles}">
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>myAdmin</title>
              ${styles}
              <style>${dom.css()}</style>
          </head>
          <body>
              <div id="root">${html}</div>
              <div id="errors"></div>
              <div id="loading"></div>
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
          Authorization: `Bearer ${token}`,
        },
      });

      const messages = await axios({
        method: 'GET',
        url: `${URL}/api/messages`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const toDos = await axios({
        method: 'GET',
        url: `${URL}/api/toDos`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        user: { name, email, id },
        projects: projects.data.data,
        messages: messages.data.data,
        toDos: toDos.data.data,
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
  const sheet = new ServerStyleSheet();
  const html = renderToString(
    <Provider store={store}>
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={req.url} context={{}}>
          <Switch>
            {routes.map((route) => (
              <Route {...route} key={route.path} />
            ))}
          </Switch>
        </StaticRouter>
      </StyleSheetManager>
    </Provider>
  );

  const styles = sheet.getStyleTags();
  sheet.seal();

  res.send(setResponse(html, preloadedState, req.hashManifest, styles));
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
