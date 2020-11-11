require('@babel/polyfill');
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['react-hot-loader/babel'],
});
require('ignore-styles')
require('./server.js');
