import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import './style.css';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter><App /></HashRouter>,
  document.getElementById('root')
);

document.getElementById('switch').addEventListener('click', () => {
  const nav = document.getElementById('nav');

  if (nav.clientWidth > 0) {
    nav.className = "collapsed";
  } else {
    nav.className = "open";
  }

});
