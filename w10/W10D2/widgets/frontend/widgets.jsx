import React from 'react';
import ReactDOM from 'react-dom';
// import Clock from './clock';
import Root from './root';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  ReactDOM.render(<Root />, main);
})